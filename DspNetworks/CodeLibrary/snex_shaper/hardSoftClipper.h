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
