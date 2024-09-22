/* ------------------------------------------------------------
name: "svf_ls"
Code generated with Faust 2.74.5. (https://faust.grame.fr)
Compilation options: -lang cpp -rui -nvi -ct 1 -cn _svf_ls -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0
------------------------------------------------------------ */

#ifndef  ___svf_ls_H__
#define  ___svf_ls_H__

#ifndef FAUSTFLOAT
#define FAUSTFLOAT float
#endif 

#include <algorithm>
#include <cmath>
#include <cstdint>
#include <math.h>

#ifndef FAUSTCLASS 
#define FAUSTCLASS _svf_ls
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

static float _svf_ls_faustpower2_f(float value) {
	return value * value;
}

class _svf_ls final : public ::faust::dsp {
	
 public:
	
	int fSampleRate;
	float fConst0;
	float fConst1;
	float fConst2;
	FAUSTFLOAT fHslider0;
	float fRec0[2];
	FAUSTFLOAT fHslider1;
	float fRec5[2];
	float fConst3;
	FAUSTFLOAT fHslider2;
	float fRec6[2];
	float fRec1[2];
	float fRec2[2];
	float fRec7[2];
	float fRec8[2];
	
 public:
	_svf_ls() {
	}
	
	void metadata(Meta* m) { 
		m->declare("compile_options", "-lang cpp -rui -nvi -ct 1 -cn _svf_ls -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0");
		m->declare("filename", "svf_ls.dsp");
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
		m->declare("name", "svf_ls");
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
		fHslider0 = FAUSTFLOAT(0.0f);
		fHslider1 = FAUSTFLOAT(1e+03f);
		fHslider2 = FAUSTFLOAT(0.7f);
	}
	
	void instanceClear() {
		for (int l0 = 0; l0 < 2; l0 = l0 + 1) {
			fRec0[l0] = 0.0f;
		}
		for (int l1 = 0; l1 < 2; l1 = l1 + 1) {
			fRec5[l1] = 0.0f;
		}
		for (int l2 = 0; l2 < 2; l2 = l2 + 1) {
			fRec6[l2] = 0.0f;
		}
		for (int l3 = 0; l3 < 2; l3 = l3 + 1) {
			fRec1[l3] = 0.0f;
		}
		for (int l4 = 0; l4 < 2; l4 = l4 + 1) {
			fRec2[l4] = 0.0f;
		}
		for (int l5 = 0; l5 < 2; l5 = l5 + 1) {
			fRec7[l5] = 0.0f;
		}
		for (int l6 = 0; l6 < 2; l6 = l6 + 1) {
			fRec8[l6] = 0.0f;
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
	
	_svf_ls* clone() {
		return new _svf_ls();
	}
	
	int getSampleRate() {
		return fSampleRate;
	}
	
	void buildUserInterface(UI* ui_interface) {
		ui_interface->openVerticalBox("svf_ls");
		ui_interface->addHorizontalSlider("Gain", &fHslider0, FAUSTFLOAT(0.0f), FAUSTFLOAT(-24.0f), FAUSTFLOAT(24.0f), FAUSTFLOAT(0.01f));
		ui_interface->addHorizontalSlider("Q", &fHslider2, FAUSTFLOAT(0.7f), FAUSTFLOAT(0.7f), FAUSTFLOAT(1e+01f), FAUSTFLOAT(0.01f));
		ui_interface->addHorizontalSlider("freq", &fHslider1, FAUSTFLOAT(1e+03f), FAUSTFLOAT(2e+01f), FAUSTFLOAT(2e+04f), FAUSTFLOAT(0.001f));
		ui_interface->closeBox();
	}
	
	void compute(int count, FAUSTFLOAT** RESTRICT inputs, FAUSTFLOAT** RESTRICT outputs) {
		FAUSTFLOAT* input0 = inputs[0];
		FAUSTFLOAT* input1 = inputs[1];
		FAUSTFLOAT* output0 = outputs[0];
		FAUSTFLOAT* output1 = outputs[1];
		float fSlow0 = fConst1 * std::max<float>(-24.0f, std::min<float>(24.0f, float(fHslider0)));
		float fSlow1 = fConst1 * std::max<float>(2e+01f, std::min<float>(2e+04f, float(fHslider1)));
		float fSlow2 = fConst1 * std::max<float>(0.7f, std::min<float>(1e+01f, float(fHslider2)));
		for (int i0 = 0; i0 < count; i0 = i0 + 1) {
			fRec0[0] = fSlow0 + fConst2 * fRec0[1];
			float fTemp0 = std::pow(1e+01f, 0.025f * fRec0[0]);
			float fTemp1 = _svf_ls_faustpower2_f(fTemp0) + -1.0f;
			float fTemp2 = std::sqrt(fTemp0);
			fRec5[0] = fSlow1 + fConst2 * fRec5[1];
			float fTemp3 = std::tan(fConst3 * fRec5[0]);
			fRec6[0] = fSlow2 + fConst2 * fRec6[1];
			float fTemp4 = fTemp3 * (1.0f / fRec6[0] + fTemp3 / fTemp2) / fTemp2 + 1.0f;
			float fTemp5 = float(input0[i0]);
			float fTemp6 = fRec1[1] + fTemp3 * (fTemp5 - fRec2[1]) / fTemp2;
			float fTemp7 = fTemp6 / fTemp4;
			fRec1[0] = 2.0f * fTemp7 - fRec1[1];
			float fTemp8 = fTemp2 * fTemp4;
			float fTemp9 = fRec2[1] + fTemp3 * fTemp6 / fTemp8;
			fRec2[0] = 2.0f * fTemp9 - fRec2[1];
			float fRec3 = fTemp7;
			float fRec4 = fTemp9;
			float fTemp10 = fTemp0 + -1.0f;
			output0[i0] = FAUSTFLOAT(fTemp5 + fRec3 * fTemp10 / fRec6[0] + fRec4 * fTemp1);
			float fTemp11 = float(input1[i0]);
			float fTemp12 = fRec7[1] + fTemp3 * (fTemp11 - fRec8[1]) / fTemp2;
			float fTemp13 = fTemp12 / fTemp4;
			fRec7[0] = 2.0f * fTemp13 - fRec7[1];
			float fTemp14 = fRec8[1] + fTemp3 * fTemp12 / fTemp8;
			fRec8[0] = 2.0f * fTemp14 - fRec8[1];
			float fRec9 = fTemp13;
			float fRec10 = fTemp14;
			output1[i0] = FAUSTFLOAT(fTemp11 + fRec9 * fTemp10 / fRec6[0] + fRec10 * fTemp1);
			fRec0[1] = fRec0[0];
			fRec5[1] = fRec5[0];
			fRec6[1] = fRec6[0];
			fRec1[1] = fRec1[0];
			fRec2[1] = fRec2[0];
			fRec7[1] = fRec7[0];
			fRec8[1] = fRec8[0];
		}
	}

};

#ifdef FAUST_UIMACROS
	
	#define FAUST_FILE_NAME "svf_ls.dsp"
	#define FAUST_CLASS_NAME "_svf_ls"
	#define FAUST_COMPILATION_OPIONS "-lang cpp -rui -nvi -ct 1 -cn _svf_ls -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0"
	#define FAUST_INPUTS 2
	#define FAUST_OUTPUTS 2
	#define FAUST_ACTIVES 3
	#define FAUST_PASSIVES 0

	FAUST_ADDHORIZONTALSLIDER("Gain", fHslider0, 0.0f, -24.0f, 24.0f, 0.01f);
	FAUST_ADDHORIZONTALSLIDER("Q", fHslider2, 0.7f, 0.7f, 1e+01f, 0.01f);
	FAUST_ADDHORIZONTALSLIDER("freq", fHslider1, 1e+03f, 2e+01f, 2e+04f, 0.001f);

	#define FAUST_LIST_ACTIVES(p) \
		p(HORIZONTALSLIDER, Gain, "Gain", fHslider0, 0.0f, -24.0f, 24.0f, 0.01f) \
		p(HORIZONTALSLIDER, Q, "Q", fHslider2, 0.7f, 0.7f, 1e+01f, 0.01f) \
		p(HORIZONTALSLIDER, freq, "freq", fHslider1, 1e+03f, 2e+01f, 2e+04f, 0.001f) \

	#define FAUST_LIST_PASSIVES(p) \

#endif

#endif
