// ==================================| Third Party Node Template |==================================

#pragma once
#include <JuceHeader.h>

namespace project
{
using namespace juce;
using namespace hise;
using namespace scriptnode;

// ==========================| The node class with all required callbacks |==========================

template <int NV> struct loopfadeplayer: public data::base
{
	// Metadata Definitions ------------------------------------------------------------------------
	
	SNEX_NODE(loopfadeplayer);
	
	struct MetadataClass
	{
		SN_NODE_ID("loopfadeplayer");
	};
	
	// set to true if you want this node to have a modulation dragger
	static constexpr bool isModNode() { return false; };
	static constexpr bool isPolyphonic() { return NV > 1; };
	// set to true if your node produces a tail
	static constexpr bool hasTail() { return false; };
	// set to true if your doesn't generate sound from silence and can be suspended when the input signal is silent
	static constexpr bool isSuspendedOnSilence() { return false; };
	// Undefine this method if you want a dynamic channel count
	static constexpr int getFixChannelAmount() { return 2; };
	
	// Define the amount and types of external data slots you want to use
	static constexpr int NumTables = 0;
	static constexpr int NumSliderPacks = 0;
	static constexpr int NumAudioFiles = 1;
	static constexpr int NumFilters = 0;
	static constexpr int NumDisplayBuffers = 0;
	
	// Global Variables -------------------------------------------------------------------------
	using IndexType = index::clamped<0, false>;
	using FloatIndex = index::unscaled<double, IndexType>;
	using InterpolatorType = index::lerp<FloatIndex>;
	
	static const int NUM_CHANNELS = 2;
		
	ExternalData data;

	span<dyn<float>, NUM_CHANNELS> sample;
		
	double sr = 0.0;
	
	double uptime = 0.0;
	double delta = 0.01;
	
	double startKnob = 0.0;
	double endKnob = 1.0;
	double start = 0.0;
	double end = 1.0;
	double range = 0.0;
	
	double fadeKnob = 0.0;
	double fadeRange = 0.0;
	float uptimeGain = 0.0f;
	double uptimeFade = 0.0;
	double gainDelta = 0.0;

	// Global Functions -------------------------------------------------------------------------
	void setFade()
	{
		fadeRange = fadeKnob * range * 0.5;
		
		if (fadeRange > 0.0)
			gainDelta = delta/fadeRange;
	}
	
	void setRange()
	{
		start = startKnob * (double)data.numSamples;
		end = endKnob * (double)data.numSamples;
		range = end - start;
		uptimeFade = start;
		setFade();
	}
	
	void resetLoop()
	{
		uptime = uptimeFade;
		uptimeFade = start;
		uptimeGain = 0.0f;
	}

	// Scriptnode Callbacks ------------------------------------------------------------------------
	void prepare(PrepareSpecs specs)
	{
		sr = specs.sampleRate;
	}
	
	void reset()
	{
		uptime = 0.0;
	}
	
	void handleHiseEvent(HiseEvent& e){}
	
	template <int C> void processFrame(span<float, C>& fd)
	{
		InterpolatorType idx(uptime);
		InterpolatorType ifx(uptimeFade);
		
		if (uptime >= range+start-fadeRange)
		{
			for(int i = 0; i < NUM_CHANNELS; i++)
			{
				fd[i] = sample[i][idx] * Math.sqrt(1.0f - uptimeGain);
				fd[i] += sample[i][ifx] * Math.sqrt(uptimeGain);
			}
			uptimeFade += delta;
			uptimeGain = Math.range(uptimeGain + (float)gainDelta, 0.0f, 1.0f);
		}
		else
		{
			for(int i = 0; i < NUM_CHANNELS; i++)
			{
				fd[i] = sample[i][idx];
			}
		}
		uptime += delta;
		
		if (uptime > range+start)
			resetLoop();
	}

	template <typename ProcessDataType> void process(ProcessDataType& pd)
	{
		if(data.numSamples == 0)
			return;
		
		static constexpr int NumChannels = getFixChannelAmount();
		// Cast the dynamic channel data to a fixed channel amount
		auto& fixData = pd.template as<ProcessData<NumChannels>>();
		
		// Create a FrameProcessor object
		auto fd = fixData.toFrameData();
		
		while(fd.next())
		{
			// Forward to frame processing
			processFrame(fd.toSpan());
		}
		
		data.setDisplayedValue(uptime);
	}
		
	int handleModulation(double& value)
	{	
		return 0;	
	}
	
	void setExternalData(const ExternalData& ed, int index)
	{
		data = ed;

		ed.referBlockTo(sample[0], 0);
		ed.referBlockTo(sample[1], 1);
		
		if(data.numSamples > 0 && sr != 0.0)
		{
			delta = data.sampleRate / sr;
			setRange();
		}
	}

	// Parameter Functions -------------------------------------------------------------------------
	template <int P> void setParameter(double v)
	{
		if (data.numSamples > 0)
		{
			if (P == 0)
			{
				if (v <= endKnob)
				{
					startKnob = v;
					setRange();
					if (uptime < start)
						resetLoop();
				}
			}
			else if (P == 1)
			{
				if (v >= startKnob)
				{
					endKnob = v;
					setRange();
				}
			}
			else if (P == 2)
			{
				fadeKnob = v;
				setFade();
			}
		}
	}
	
	void createParameters(ParameterDataList& data)
	{
		{
			parameter::data p("start", {0.0, 1.0, 0.01});
			registerCallback<0>(p);
			p.setDefaultValue(0);
			data.add(std::move(p));
		}
		{
			parameter::data p("end", {0.0, 1.0, 0.01});
			registerCallback<1>(p);
			p.setDefaultValue(1.0);
			data.add(std::move(p));
		}
		{
			parameter::data p("fade", {0.0, 1.0, 0.01});
			registerCallback<2>(p);
			p.setDefaultValue(0);
			data.add(std::move(p));
		}
	}
};
}


