/* ------------------------------------------------------------
name: "svf_lp"
Code generated with Faust 2.74.5. (https://faust.grame.fr)
Compilation options: -lang cpp -rui -nvi -ct 1 -cn _svf_lp -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0
------------------------------------------------------------ */

#ifndef  ___svf_lp_H__
#define  ___svf_lp_H__

#ifndef FAUSTFLOAT
#define FAUSTFLOAT float
#endif 

#include <algorithm>
#include <cmath>
#include <cstdint>
#include <math.h>

#ifndef FAUSTCLASS 
#define FAUSTCLASS _svf_lp
#endif

#ifdef __APPLE__ 
#define exp10f __exp10f
#define exp10 __exp10
#endif

#if defined(_WIN32)
#define RESTRICT __restrict
#else
#define RESTRICT __restrict__
#endif


class _svf_lp final : public ::faust::dsp {
	
 public:
	
	int fSampleRate;
	float fConst0;
	float fConst1;
	float fConst2;
	FAUSTFLOAT fHslider0;
	float fRec3[2];
	float fConst3;
	FAUSTFLOAT fHslider1;
	float fRec4[2];
	float fRec0[2];
	float fRec1[2];
	float fRec5[2];
	float fRec6[2];
	
 public:
	_svf_lp() {
	}
	
	void metadata(Meta* m) { 
		m->declare("compile_options", "-lang cpp -rui -nvi -ct 1 -cn _svf_lp -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0");
		m->declare("filename", "svf_lp.dsp");
		m->declare("filters.lib/lowpass0_highpass1", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/name", "Faust Filters Library");
		m->declare("filters.lib/svf:author", "Oleg Nesterov");
		m->declare("filters.lib/svf:copyright", "Copyright (C) 2020 Oleg Nesterov <oleg@redhat.com>");
		m->declare("filters.lib/svf:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/version", "1.3.0");
		m->declare("maths.lib/author", "GRAME");
		m->declare("maths.lib/copyright", "GRAME");
		m->declare("maths.lib/license", "LGPL with exception");
		m->declare("maths.lib/name", "Faust Math Library");
		m->declare("maths.lib/version", "2.8.0");
		m->declare("name", "svf_lp");
		m->declare("platform.lib/name", "Generic Platform Library");
		m->declare("platform.lib/version", "1.3.0");
		m->declare("routes.lib/name", "Faust Signal Routing Library");
		m->declare("routes.lib/version", "1.2.0");
		m->declare("signals.lib/name", "Faust Signal Routing Library");
		m->declare("signals.lib/version", "1.5.0");
	}

	static constexpr int getStaticNumInputs() {
		return 2;
	}
	static constexpr int getStaticNumOutputs() {
		return 2;
	}
	int getNumInputs() {
		return 2;
	}
	int getNumOutputs() {
		return 2;
	}
	
	static void classInit(int sample_rate) {
	}
	
	void instanceConstants(int sample_rate) {
		fSampleRate = sample_rate;
		fConst0 = std::min<float>(1.92e+05f, std::max<float>(1.0f, float(fSampleRate)));
		fConst1 = 44.1f / fConst0;
		fConst2 = 1.0f - fConst1;
		fConst3 = 3.1415927f / fConst0;
	}
	
	void instanceResetUserInterface() {
		fHslider0 = FAUSTFLOAT(1e+03f);
		fHslider1 = FAUSTFLOAT(0.7f);
	}
	
	void instanceClear() {
		for (int l0 = 0; l0 < 2; l0 = l0 + 1) {
			fRec3[l0] = 0.0f;
		}
		for (int l1 = 0; l1 < 2; l1 = l1 + 1) {
			fRec4[l1] = 0.0f;
		}
		for (int l2 = 0; l2 < 2; l2 = l2 + 1) {
			fRec0[l2] = 0.0f;
		}
		for (int l3 = 0; l3 < 2; l3 = l3 + 1) {
			fRec1[l3] = 0.0f;
		}
		for (int l4 = 0; l4 < 2; l4 = l4 + 1) {
			fRec5[l4] = 0.0f;
		}
		for (int l5 = 0; l5 < 2; l5 = l5 + 1) {
			fRec6[l5] = 0.0f;
		}
	}
	
	void init(int sample_rate) {
		classInit(sample_rate);
		instanceInit(sample_rate);
	}
	
	void instanceInit(int sample_rate) {
		instanceConstants(sample_rate);
		instanceResetUserInterface();
		instanceClear();
	}
	
	_svf_lp* clone() {
		return new _svf_lp();
	}
	
	int getSampleRate() {
		return fSampleRate;
	}
	
	void buildUserInterface(UI* ui_interface) {
		ui_interface->openVerticalBox("svf_lp");
		ui_interface->addHorizontalSlider("Q", &fHslider1, FAUSTFLOAT(0.7f), FAUSTFLOAT(0.7f), FAUSTFLOAT(1e+01f), FAUSTFLOAT(0.01f));
		ui_interface->addHorizontalSlider("freq", &fHslider0, FAUSTFLOAT(1e+03f), FAUSTFLOAT(2e+01f), FAUSTFLOAT(2e+04f), FAUSTFLOAT(0.001f));
		ui_interface->closeBox();
	}
	
	void compute(int count, FAUSTFLOAT** RESTRICT inputs, FAUSTFLOAT** RESTRICT outputs) {
		FAUSTFLOAT* input0 = inputs[0];
		FAUSTFLOAT* input1 = inputs[1];
		FAUSTFLOAT* output0 = outputs[0];
		FAUSTFLOAT* output1 = outputs[1];
		float fSlow0 = fConst1 * std::max<float>(2e+01f, std::min<float>(2e+04f, float(fHslider0)));
		float fSlow1 = fConst1 * std::max<float>(0.7f, std::min<float>(1e+01f, float(fHslider1)));
		for (int i0 = 0; i0 < count; i0 = i0 + 1) {
			fRec3[0] = fSlow0 + fConst2 * fRec3[1];
			float fTemp0 = std::tan(fConst3 * fRec3[0]);
			fRec4[0] = fSlow1 + fConst2 * fRec4[1];
			float fTemp1 = fTemp0 * (1.0f / fRec4[0] + fTemp0) + 1.0f;
			float fTemp2 = float(input0[i0]);
			float fTemp3 = fRec0[1] + fTemp0 * (fTemp2 - fRec1[1]);
			float fTemp4 = fTemp3 / fTemp1;
			fRec0[0] = 2.0f * fTemp4 - fRec0[1];
			float fTemp5 = fRec1[1] + fTemp0 * fTemp3 / fTemp1;
			fRec1[0] = 2.0f * fTemp5 - fRec1[1];
			float fRec2 = fTemp5;
			output0[i0] = FAUSTFLOAT(fRec2);
			float fTemp6 = float(input1[i0]);
			float fTemp7 = fRec5[1] + fTemp0 * (fTemp6 - fRec6[1]);
			float fTemp8 = fTemp7 / fTemp1;
			fRec5[0] = 2.0f * fTemp8 - fRec5[1];
			float fTemp9 = fRec6[1] + fTemp0 * fTemp7 / fTemp1;
			fRec6[0] = 2.0f * fTemp9 - fRec6[1];
			float fRec7 = fTemp9;
			output1[i0] = FAUSTFLOAT(fRec7);
			fRec3[1] = fRec3[0];
			fRec4[1] = fRec4[0];
			fRec0[1] = fRec0[0];
			fRec1[1] = fRec1[0];
			fRec5[1] = fRec5[0];
			fRec6[1] = fRec6[0];
		}
	}

};

#ifdef FAUST_UIMACROS
	
	#define FAUST_FILE_NAME "svf_lp.dsp"
	#define FAUST_CLASS_NAME "_svf_lp"
	#define FAUST_COMPILATION_OPIONS "-lang cpp -rui -nvi -ct 1 -cn _svf_lp -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0"
	#define FAUST_INPUTS 2
	#define FAUST_OUTPUTS 2
	#define FAUST_ACTIVES 2
	#define FAUST_PASSIVES 0

	FAUST_ADDHORIZONTALSLIDER("Q", fHslider1, 0.7f, 0.7f, 1e+01f, 0.01f);
	FAUST_ADDHORIZONTALSLIDER("freq", fHslider0, 1e+03f, 2e+01f, 2e+04f, 0.001f);

	#define FAUST_LIST_ACTIVES(p) \
		p(HORIZONTALSLIDER, Q, "Q", fHslider1, 0.7f, 0.7f, 1e+01f, 0.01f) \
		p(HORIZONTALSLIDER, freq, "freq", fHslider0, 1e+03f, 2e+01f, 2e+04f, 0.001f) \

	#define FAUST_LIST_PASSIVES(p) \

#endif

#endif
