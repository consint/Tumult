#pragma once

// These will improve the readability of the connection definition

#define getT(Idx) template get<Idx>()
#define connectT(Idx, target) template connect<Idx>(target)
#define getParameterT(Idx) template getParameter<Idx>()
#define setParameterT(Idx, value) template setParameter<Idx>(value)
#define setParameterWT(Idx, value) template setWrapParameter<Idx>(value)
using namespace scriptnode;
using namespace snex;
using namespace snex::Types;

namespace hardsoftclipper_impl
{
// ==============================| Node & Parameter type declarations |==============================

template <int NumVoices> struct hardSoftClipper
{
	SNEX_NODE(hardSoftClipper);
	float amount = 0.0;
	float getSample(float input)
	{
		return Math.sign(input) * Math.pow(Math.atan(Math.pow(Math.abs(input), 1 / amount)), amount);
		//return input;
	}
	// These functions are the glue code that call the function above
	template <typename T> void process(T& data)
	{
		for(auto ch: data)
		{
			for(auto& s: data.toChannelData(ch))
			{
				s = getSample(s);
			}
		}
	}
	template <typename T> void processFrame(T& data)
	{
		for(auto& s: data)
			s = getSample(s);
	}
	void reset()
	{
	}
	void prepare(PrepareSpecs ps)
	{
	}
	void setExternalData(const ExternalData& d, int index)
	{
	}
	template <int P> void setParameter(double v)
	{
		if(P == 0) // soft/hard value
			amount = v;
	}
};

template <int NV>
using snex_shaper_t = wrap::no_data<core::snex_shaper<hardSoftClipper<NV>>>;

template <int NV>
using fix32_block_t_ = container::chain<parameter::empty, 
                                        wrap::fix<2, snex_shaper_t<NV>>>;

template <int NV>
using fix32_block_t = wrap::fix_block<32, fix32_block_t_<NV>>;

namespace hardsoftclipper_t_parameters
{
}

template <int NV>
using hardsoftclipper_t_ = container::chain<parameter::plain<hardsoftclipper_impl::snex_shaper_t<NV>, 0>, 
                                            wrap::fix<2, fix32_block_t<NV>>>;

// =================================| Root node initialiser class |=================================

template <int NV> struct instance: public hardsoftclipper_impl::hardsoftclipper_t_<NV>
{
	
	struct metadata
	{
		static const int NumTables = 0;
		static const int NumSliderPacks = 0;
		static const int NumAudioFiles = 0;
		static const int NumFilters = 0;
		static const int NumDisplayBuffers = 0;
		
		SNEX_METADATA_ID(hardsoftclipper);
		SNEX_METADATA_NUM_CHANNELS(2);
		SNEX_METADATA_ENCODED_PARAMETERS(18)
		{
			0x005B, 0x0000, 0x6800, 0x7261, 0x7364, 0x666F, 0x0074, 0xCCCD, 
            0x3D4C, 0x0000, 0x3F80, 0xCCCD, 0x3D4C, 0x0000, 0x3F80, 0x0000, 
            0x0000, 0x0000
		};
	};
	
	instance()
	{
		// Node References -------------------------------------------------------------------------
		
		auto& fix32_block = this->getT(0);         // hardsoftclipper_impl::fix32_block_t<NV>
		auto& snex_shaper = this->getT(0).getT(0); // hardsoftclipper_impl::snex_shaper_t<NV>
		
		// Parameter Connections -------------------------------------------------------------------
		
		this->getParameterT(0).connectT(0, snex_shaper); // hardsoft -> snex_shaper::hardsoft
		
		// Default Values --------------------------------------------------------------------------
		
		; // snex_shaper::hardsoft is automated
		
		this->setParameterT(0, 0.05);
		this->setExternalData({}, -1);
	}
	~instance() override
	{
		// Cleanup external data references --------------------------------------------------------
		
		this->setExternalData({}, -1);
	}
	
	static constexpr bool isPolyphonic() { return NV > 1; };
	
	static constexpr bool hasTail() { return true; };
	
	static constexpr bool isSuspendedOnSilence() { return false; };
	
	void setExternalData(const ExternalData& b, int index)
	{
		// External Data Connections ---------------------------------------------------------------
		
		this->getT(0).getT(0).setExternalData(b, index); // hardsoftclipper_impl::snex_shaper_t<NV>
	}
};
}

#undef getT
#undef connectT
#undef setParameterT
#undef setParameterWT
#undef getParameterT
// ======================================| Public Definition |======================================

namespace project
{
// polyphonic template declaration

template <int NV>
using hardsoftclipper = wrap::node<hardsoftclipper_impl::instance<NV>>;
}


