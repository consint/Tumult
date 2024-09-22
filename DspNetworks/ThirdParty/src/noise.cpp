/* ------------------------------------------------------------
name: "noise"
Code generated with Faust 2.74.5. (https://faust.grame.fr)
Compilation options: -lang cpp -rui -nvi -ct 1 -cn _noise -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0
------------------------------------------------------------ */

#ifndef  ___noise_H__
#define  ___noise_H__

#ifndef FAUSTFLOAT
#define FAUSTFLOAT float
#endif 

#include <algorithm>
#include <cmath>
#include <cstdint>
#include <math.h>

#ifndef FAUSTCLASS 
#define FAUSTCLASS _noise
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


class _noise final : public ::faust::dsp {
	
 public:
	
	FAUSTFLOAT fHslider0;
	int iVec0[2];
	int iRec0[2];
	float fVec1[2];
	float fRec1[4];
	float fRec14[2];
	int fSampleRate;
	float fConst0;
	float fConst1;
	float fConst2;
	float fConst3;
	float fConst4;
	float fConst5;
	float fConst6;
	float fConst7;
	float fConst8;
	float fRec13[2];
	float fConst9;
	float fConst10;
	float fConst11;
	float fConst12;
	float fConst13;
	float fConst14;
	float fConst15;
	float fConst16;
	float fConst17;
	float fRec12[2];
	float fConst18;
	float fConst19;
	float fConst20;
	float fConst21;
	float fConst22;
	float fConst23;
	float fConst24;
	float fConst25;
	float fConst26;
	float fRec11[2];
	float fConst27;
	float fConst28;
	float fConst29;
	float fConst30;
	float fConst31;
	float fConst32;
	float fConst33;
	float fConst34;
	float fConst35;
	float fRec10[2];
	float fConst36;
	float fConst37;
	float fConst38;
	float fConst39;
	float fConst40;
	float fConst41;
	float fConst42;
	float fConst43;
	float fConst44;
	float fRec9[2];
	float fConst45;
	float fConst46;
	float fConst47;
	float fConst48;
	float fConst49;
	float fConst50;
	float fConst51;
	float fConst52;
	float fConst53;
	float fRec8[2];
	float fConst54;
	float fConst55;
	float fConst56;
	float fConst57;
	float fConst58;
	float fConst59;
	float fConst60;
	float fConst61;
	float fConst62;
	float fRec7[2];
	float fConst63;
	float fConst64;
	float fConst65;
	float fConst66;
	float fConst67;
	float fConst68;
	float fConst69;
	float fConst70;
	float fConst71;
	float fRec6[2];
	float fConst72;
	float fConst73;
	float fConst74;
	float fConst75;
	float fConst76;
	float fConst77;
	float fConst78;
	float fConst79;
	float fConst80;
	float fRec5[2];
	float fConst81;
	float fConst82;
	float fConst83;
	float fConst84;
	float fConst85;
	float fConst86;
	float fConst87;
	float fConst88;
	float fConst89;
	float fRec4[2];
	float fConst90;
	float fConst91;
	float fConst92;
	float fConst93;
	float fConst94;
	float fConst95;
	float fConst96;
	float fConst97;
	float fConst98;
	float fRec3[2];
	float fConst99;
	float fConst100;
	float fConst101;
	float fConst102;
	float fConst103;
	float fConst104;
	float fConst105;
	float fConst106;
	float fConst107;
	float fRec2[2];
	float fConst108;
	float fConst109;
	float fConst110;
	float fConst111;
	float fConst112;
	float fRec26[2];
	float fConst113;
	float fConst114;
	float fConst115;
	float fConst116;
	float fConst117;
	float fRec25[2];
	float fConst118;
	float fConst119;
	float fConst120;
	float fConst121;
	float fConst122;
	float fRec24[2];
	float fConst123;
	float fConst124;
	float fConst125;
	float fConst126;
	float fConst127;
	float fRec23[2];
	float fConst128;
	float fConst129;
	float fConst130;
	float fConst131;
	float fConst132;
	float fRec22[2];
	float fConst133;
	float fConst134;
	float fConst135;
	float fConst136;
	float fConst137;
	float fRec21[2];
	float fConst138;
	float fConst139;
	float fConst140;
	float fConst141;
	float fConst142;
	float fRec20[2];
	float fConst143;
	float fConst144;
	float fConst145;
	float fConst146;
	float fConst147;
	float fRec19[2];
	float fConst148;
	float fConst149;
	float fConst150;
	float fConst151;
	float fConst152;
	float fRec18[2];
	float fConst153;
	float fConst154;
	float fConst155;
	float fConst156;
	float fConst157;
	float fRec17[2];
	float fConst158;
	float fConst159;
	float fConst160;
	float fConst161;
	float fConst162;
	float fRec16[2];
	float fConst163;
	float fConst164;
	float fConst165;
	float fConst166;
	float fConst167;
	float fRec15[2];
	float fConst168;
	float fRec28[2];
	float fRec29[2];
	float fRec27[2];
	
 public:
	_noise() {
	}
	
	void metadata(Meta* m) { 
		m->declare("basics.lib/name", "Faust Basic Element Library");
		m->declare("basics.lib/tabulateNd", "Copyright (C) 2023 Bart Brouns <bart@magnetophon.nl>");
		m->declare("basics.lib/version", "1.17.1");
		m->declare("compile_options", "-lang cpp -rui -nvi -ct 1 -cn _noise -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0");
		m->declare("filename", "noise.dsp");
		m->declare("filters.lib/dcblocker:author", "Julius O. Smith III");
		m->declare("filters.lib/dcblocker:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/dcblocker:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/fir:author", "Julius O. Smith III");
		m->declare("filters.lib/fir:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/fir:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/iir:author", "Julius O. Smith III");
		m->declare("filters.lib/iir:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/iir:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/lowpass0_highpass1", "MIT-style STK-4.3 license");
		m->declare("filters.lib/lowpass0_highpass1:author", "Julius O. Smith III");
		m->declare("filters.lib/lowpass:author", "Julius O. Smith III");
		m->declare("filters.lib/lowpass:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/lowpass:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/name", "Faust Filters Library");
		m->declare("filters.lib/nlf2:author", "Julius O. Smith III");
		m->declare("filters.lib/nlf2:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/nlf2:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/pole:author", "Julius O. Smith III");
		m->declare("filters.lib/pole:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/pole:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/spectral_tilt:author", "Julius O. Smith III");
		m->declare("filters.lib/spectral_tilt:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/spectral_tilt:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/tf1:author", "Julius O. Smith III");
		m->declare("filters.lib/tf1:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/tf1:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/tf1s:author", "Julius O. Smith III");
		m->declare("filters.lib/tf1s:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/tf1s:license", "MIT-style STK-4.3 license");
		m->declare("filters.lib/version", "1.3.0");
		m->declare("filters.lib/zero:author", "Julius O. Smith III");
		m->declare("filters.lib/zero:copyright", "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>");
		m->declare("filters.lib/zero:license", "MIT-style STK-4.3 license");
		m->declare("maths.lib/author", "GRAME");
		m->declare("maths.lib/copyright", "GRAME");
		m->declare("maths.lib/license", "LGPL with exception");
		m->declare("maths.lib/name", "Faust Math Library");
		m->declare("maths.lib/version", "2.8.0");
		m->declare("name", "noise");
		m->declare("noises.lib/colored_noise:author", "Constantinos Odysseas Economou");
		m->declare("noises.lib/colored_noise:copyright", "Copyright (C) 2022 Constantinos Odysseas Economou <c.economou@sirenfx.io>");
		m->declare("noises.lib/colored_noise:license", "MIT-style STK-4.3 license");
		m->declare("noises.lib/name", "Faust Noise Generator Library");
		m->declare("noises.lib/version", "1.4.1");
		m->declare("oscillators.lib/name", "Faust Oscillator Library");
		m->declare("oscillators.lib/version", "1.5.1");
		m->declare("platform.lib/name", "Generic Platform Library");
		m->declare("platform.lib/version", "1.3.0");
	}

	static constexpr int getStaticNumInputs() {
		return 0;
	}
	static constexpr int getStaticNumOutputs() {
		return 2;
	}
	int getNumInputs() {
		return 0;
	}
	int getNumOutputs() {
		return 2;
	}
	
	static void classInit(int sample_rate) {
	}
	
	void instanceConstants(int sample_rate) {
		fSampleRate = sample_rate;
		fConst0 = std::min<float>(1.92e+05f, std::max<float>(1.0f, float(fSampleRate)));
		fConst1 = 1.0f / std::tan(0.5f / fConst0);
		fConst2 = std::tan(62.831852f / fConst0);
		fConst3 = std::tan(171.61037f / fConst0);
		fConst4 = 125.663704f * (fConst3 / fConst2);
		fConst5 = fConst4 - fConst1;
		fConst6 = fConst1 + fConst4;
		fConst7 = 125.663704f - fConst1;
		fConst8 = 1.0f / (fConst1 + 125.663704f);
		fConst9 = std::tan(321.5665f / fConst0);
		fConst10 = 125.663704f * (fConst9 / fConst2);
		fConst11 = fConst10 - fConst1;
		fConst12 = fConst1 + fConst10;
		fConst13 = fConst2 / fConst3;
		fConst14 = std::tan(117.73542f / fConst0);
		fConst15 = 125.663704f * (fConst14 / fConst2);
		fConst16 = fConst15 - fConst1;
		fConst17 = 1.0f / (fConst1 + fConst15);
		fConst18 = std::tan(602.5569f / fConst0);
		fConst19 = 125.663704f * (fConst18 / fConst2);
		fConst20 = fConst19 - fConst1;
		fConst21 = fConst1 + fConst19;
		fConst22 = fConst14 / fConst9;
		fConst23 = std::tan(220.61469f / fConst0);
		fConst24 = 125.663704f * (fConst23 / fConst2);
		fConst25 = fConst24 - fConst1;
		fConst26 = 1.0f / (fConst1 + fConst24);
		fConst27 = std::tan(1129.0815f / fConst0);
		fConst28 = 125.663704f * (fConst27 / fConst2);
		fConst29 = fConst28 - fConst1;
		fConst30 = fConst1 + fConst28;
		fConst31 = fConst23 / fConst18;
		fConst32 = std::tan(413.39163f / fConst0);
		fConst33 = 125.663704f * (fConst32 / fConst2);
		fConst34 = fConst33 - fConst1;
		fConst35 = 1.0f / (fConst1 + fConst33);
		fConst36 = std::tan(2115.6926f / fConst0);
		fConst37 = 125.663704f * (fConst36 / fConst2);
		fConst38 = fConst37 - fConst1;
		fConst39 = fConst1 + fConst37;
		fConst40 = fConst32 / fConst27;
		fConst41 = std::tan(774.6204f / fConst0);
		fConst42 = 125.663704f * (fConst41 / fConst2);
		fConst43 = fConst42 - fConst1;
		fConst44 = 1.0f / (fConst1 + fConst42);
		fConst45 = std::tan(3964.4219f / fConst0);
		fConst46 = 125.663704f * (fConst45 / fConst2);
		fConst47 = fConst46 - fConst1;
		fConst48 = fConst1 + fConst46;
		fConst49 = fConst41 / fConst36;
		fConst50 = std::tan(1451.4973f / fConst0);
		fConst51 = 125.663704f * (fConst50 / fConst2);
		fConst52 = fConst51 - fConst1;
		fConst53 = 1.0f / (fConst1 + fConst51);
		fConst54 = std::tan(7428.603f / fConst0);
		fConst55 = 125.663704f * (fConst54 / fConst2);
		fConst56 = fConst55 - fConst1;
		fConst57 = fConst1 + fConst55;
		fConst58 = fConst50 / fConst45;
		fConst59 = std::tan(2719.8408f / fConst0);
		fConst60 = 125.663704f * (fConst59 / fConst2);
		fConst61 = fConst60 - fConst1;
		fConst62 = 1.0f / (fConst1 + fConst60);
		fConst63 = std::tan(13919.846f / fConst0);
		fConst64 = 125.663704f * (fConst63 / fConst2);
		fConst65 = fConst64 - fConst1;
		fConst66 = fConst1 + fConst64;
		fConst67 = fConst59 / fConst54;
		fConst68 = std::tan(5096.4854f / fConst0);
		fConst69 = 125.663704f * (fConst68 / fConst2);
		fConst70 = fConst69 - fConst1;
		fConst71 = 1.0f / (fConst1 + fConst69);
		fConst72 = std::tan(26083.248f / fConst0);
		fConst73 = 125.663704f * (fConst72 / fConst2);
		fConst74 = fConst73 - fConst1;
		fConst75 = fConst1 + fConst73;
		fConst76 = fConst68 / fConst63;
		fConst77 = std::tan(9549.883f / fConst0);
		fConst78 = 125.663704f * (fConst77 / fConst2);
		fConst79 = fConst78 - fConst1;
		fConst80 = 1.0f / (fConst1 + fConst78);
		fConst81 = std::tan(48875.246f / fConst0);
		fConst82 = 125.663704f * (fConst81 / fConst2);
		fConst83 = fConst82 - fConst1;
		fConst84 = fConst1 + fConst82;
		fConst85 = fConst77 / fConst72;
		fConst86 = std::tan(17894.736f / fConst0);
		fConst87 = 125.663704f * (fConst86 / fConst2);
		fConst88 = fConst87 - fConst1;
		fConst89 = 1.0f / (fConst1 + fConst87);
		fConst90 = std::tan(91583.29f / fConst0);
		fConst91 = 125.663704f * (fConst90 / fConst2);
		fConst92 = fConst91 - fConst1;
		fConst93 = fConst1 + fConst91;
		fConst94 = fConst86 / fConst81;
		fConst95 = std::tan(33531.47f / fConst0);
		fConst96 = 125.663704f * (fConst95 / fConst2);
		fConst97 = fConst96 - fConst1;
		fConst98 = 1.0f / (fConst1 + fConst96);
		fConst99 = std::tan(171610.36f / fConst0);
		fConst100 = 125.663704f * (fConst99 / fConst2);
		fConst101 = fConst100 - fConst1;
		fConst102 = fConst1 + fConst100;
		fConst103 = fConst95 / fConst90;
		fConst104 = std::tan(62831.85f / fConst0);
		fConst105 = 125.663704f * (fConst104 / fConst2);
		fConst106 = fConst105 - fConst1;
		fConst107 = 1.0f / (fConst1 + fConst105);
		fConst108 = 49.96747f * (fConst104 / fConst99);
		fConst109 = std::tan(45.900375f / fConst0);
		fConst110 = 125.663704f * (fConst109 / fConst2);
		fConst111 = fConst110 - fConst1;
		fConst112 = fConst1 + fConst110;
		fConst113 = std::tan(86.00892f / fConst0);
		fConst114 = 125.663704f * (fConst113 / fConst2);
		fConst115 = fConst114 - fConst1;
		fConst116 = fConst1 + fConst114;
		fConst117 = fConst2 / fConst109;
		fConst118 = std::tan(161.16502f / fConst0);
		fConst119 = 125.663704f * (fConst118 / fConst2);
		fConst120 = fConst119 - fConst1;
		fConst121 = fConst1 + fConst119;
		fConst122 = fConst14 / fConst113;
		fConst123 = std::tan(301.9938f / fConst0);
		fConst124 = 125.663704f * (fConst123 / fConst2);
		fConst125 = fConst124 - fConst1;
		fConst126 = fConst1 + fConst124;
		fConst127 = fConst23 / fConst118;
		fConst128 = std::tan(565.8813f / fConst0);
		fConst129 = 125.663704f * (fConst128 / fConst2);
		fConst130 = fConst129 - fConst1;
		fConst131 = fConst1 + fConst129;
		fConst132 = fConst32 / fConst123;
		fConst133 = std::tan(1060.3582f / fConst0);
		fConst134 = 125.663704f * (fConst133 / fConst2);
		fConst135 = fConst134 - fConst1;
		fConst136 = fConst1 + fConst134;
		fConst137 = fConst41 / fConst128;
		fConst138 = std::tan(1986.9176f / fConst0);
		fConst139 = 125.663704f * (fConst138 / fConst2);
		fConst140 = fConst139 - fConst1;
		fConst141 = fConst1 + fConst139;
		fConst142 = fConst50 / fConst133;
		fConst143 = std::tan(3723.1208f / fConst0);
		fConst144 = 125.663704f * (fConst143 / fConst2);
		fConst145 = fConst144 - fConst1;
		fConst146 = fConst1 + fConst144;
		fConst147 = fConst59 / fConst138;
		fConst148 = std::tan(6976.4487f / fConst0);
		fConst149 = 125.663704f * (fConst148 / fConst2);
		fConst150 = fConst149 - fConst1;
		fConst151 = fConst1 + fConst149;
		fConst152 = fConst68 / fConst143;
		fConst153 = std::tan(13072.592f / fConst0);
		fConst154 = 125.663704f * (fConst153 / fConst2);
		fConst155 = fConst154 - fConst1;
		fConst156 = fConst1 + fConst154;
		fConst157 = fConst77 / fConst148;
		fConst158 = std::tan(24495.65f / fConst0);
		fConst159 = 125.663704f * (fConst158 / fConst2);
		fConst160 = fConst159 - fConst1;
		fConst161 = fConst1 + fConst159;
		fConst162 = fConst86 / fConst153;
		fConst163 = std::tan(45900.375f / fConst0);
		fConst164 = 125.663704f * (fConst163 / fConst2);
		fConst165 = fConst164 - fConst1;
		fConst166 = fConst1 + fConst164;
		fConst167 = fConst95 / fConst158;
		fConst168 = 0.013842662f * (fConst104 / fConst163);
	}
	
	void instanceResetUserInterface() {
		fHslider0 = FAUSTFLOAT(0.0f);
	}
	
	void instanceClear() {
		for (int l0 = 0; l0 < 2; l0 = l0 + 1) {
			iVec0[l0] = 0;
		}
		for (int l1 = 0; l1 < 2; l1 = l1 + 1) {
			iRec0[l1] = 0;
		}
		for (int l2 = 0; l2 < 2; l2 = l2 + 1) {
			fVec1[l2] = 0.0f;
		}
		for (int l3 = 0; l3 < 4; l3 = l3 + 1) {
			fRec1[l3] = 0.0f;
		}
		for (int l4 = 0; l4 < 2; l4 = l4 + 1) {
			fRec14[l4] = 0.0f;
		}
		for (int l5 = 0; l5 < 2; l5 = l5 + 1) {
			fRec13[l5] = 0.0f;
		}
		for (int l6 = 0; l6 < 2; l6 = l6 + 1) {
			fRec12[l6] = 0.0f;
		}
		for (int l7 = 0; l7 < 2; l7 = l7 + 1) {
			fRec11[l7] = 0.0f;
		}
		for (int l8 = 0; l8 < 2; l8 = l8 + 1) {
			fRec10[l8] = 0.0f;
		}
		for (int l9 = 0; l9 < 2; l9 = l9 + 1) {
			fRec9[l9] = 0.0f;
		}
		for (int l10 = 0; l10 < 2; l10 = l10 + 1) {
			fRec8[l10] = 0.0f;
		}
		for (int l11 = 0; l11 < 2; l11 = l11 + 1) {
			fRec7[l11] = 0.0f;
		}
		for (int l12 = 0; l12 < 2; l12 = l12 + 1) {
			fRec6[l12] = 0.0f;
		}
		for (int l13 = 0; l13 < 2; l13 = l13 + 1) {
			fRec5[l13] = 0.0f;
		}
		for (int l14 = 0; l14 < 2; l14 = l14 + 1) {
			fRec4[l14] = 0.0f;
		}
		for (int l15 = 0; l15 < 2; l15 = l15 + 1) {
			fRec3[l15] = 0.0f;
		}
		for (int l16 = 0; l16 < 2; l16 = l16 + 1) {
			fRec2[l16] = 0.0f;
		}
		for (int l17 = 0; l17 < 2; l17 = l17 + 1) {
			fRec26[l17] = 0.0f;
		}
		for (int l18 = 0; l18 < 2; l18 = l18 + 1) {
			fRec25[l18] = 0.0f;
		}
		for (int l19 = 0; l19 < 2; l19 = l19 + 1) {
			fRec24[l19] = 0.0f;
		}
		for (int l20 = 0; l20 < 2; l20 = l20 + 1) {
			fRec23[l20] = 0.0f;
		}
		for (int l21 = 0; l21 < 2; l21 = l21 + 1) {
			fRec22[l21] = 0.0f;
		}
		for (int l22 = 0; l22 < 2; l22 = l22 + 1) {
			fRec21[l22] = 0.0f;
		}
		for (int l23 = 0; l23 < 2; l23 = l23 + 1) {
			fRec20[l23] = 0.0f;
		}
		for (int l24 = 0; l24 < 2; l24 = l24 + 1) {
			fRec19[l24] = 0.0f;
		}
		for (int l25 = 0; l25 < 2; l25 = l25 + 1) {
			fRec18[l25] = 0.0f;
		}
		for (int l26 = 0; l26 < 2; l26 = l26 + 1) {
			fRec17[l26] = 0.0f;
		}
		for (int l27 = 0; l27 < 2; l27 = l27 + 1) {
			fRec16[l27] = 0.0f;
		}
		for (int l28 = 0; l28 < 2; l28 = l28 + 1) {
			fRec15[l28] = 0.0f;
		}
		for (int l29 = 0; l29 < 2; l29 = l29 + 1) {
			fRec28[l29] = 0.0f;
		}
		for (int l30 = 0; l30 < 2; l30 = l30 + 1) {
			fRec29[l30] = 0.0f;
		}
		for (int l31 = 0; l31 < 2; l31 = l31 + 1) {
			fRec27[l31] = 0.0f;
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
	
	_noise* clone() {
		return new _noise();
	}
	
	int getSampleRate() {
		return fSampleRate;
	}
	
	void buildUserInterface(UI* ui_interface) {
		ui_interface->openVerticalBox("noise");
		ui_interface->addHorizontalSlider("Mode", &fHslider0, FAUSTFLOAT(0.0f), FAUSTFLOAT(0.0f), FAUSTFLOAT(4.0f), FAUSTFLOAT(1.0f));
		ui_interface->closeBox();
	}
	
	void compute(int count, FAUSTFLOAT** RESTRICT inputs, FAUSTFLOAT** RESTRICT outputs) {
		FAUSTFLOAT* output0 = outputs[0];
		FAUSTFLOAT* output1 = outputs[1];
		float fSlow0 = std::max<float>(0.0f, std::min<float>(4.0f, float(fHslider0)));
		int iSlow1 = fSlow0 >= 3.0f;
		int iSlow2 = fSlow0 >= 2.0f;
		int iSlow3 = fSlow0 >= 1.0f;
		int iSlow4 = fSlow0 >= 4.0f;
		for (int i0 = 0; i0 < count; i0 = i0 + 1) {
			iVec0[0] = 1;
			iRec0[0] = 1103515245 * iRec0[1] + 12345;
			float fTemp0 = float(iRec0[0]);
			fVec1[0] = fTemp0;
			float fTemp1 = 4.656613e-10f * fTemp0;
			fRec1[0] = 0.5221894f * fRec1[3] + fTemp1 + 2.494956f * fRec1[1] - 2.0172658f * fRec1[2];
			fRec14[0] = 0.995f * fRec14[1] + 4.656613e-10f * (fTemp0 - fVec1[1]);
			fRec13[0] = -(fConst8 * (fConst7 * fRec13[1] - (fConst6 * fRec14[0] + fConst5 * fRec14[1])));
			fRec12[0] = -(fConst17 * (fConst16 * fRec12[1] - fConst13 * (fConst12 * fRec13[0] + fConst11 * fRec13[1])));
			fRec11[0] = -(fConst26 * (fConst25 * fRec11[1] - fConst22 * (fConst21 * fRec12[0] + fConst20 * fRec12[1])));
			fRec10[0] = -(fConst35 * (fConst34 * fRec10[1] - fConst31 * (fConst30 * fRec11[0] + fConst29 * fRec11[1])));
			fRec9[0] = -(fConst44 * (fConst43 * fRec9[1] - fConst40 * (fConst39 * fRec10[0] + fConst38 * fRec10[1])));
			fRec8[0] = -(fConst53 * (fConst52 * fRec8[1] - fConst49 * (fConst48 * fRec9[0] + fConst47 * fRec9[1])));
			fRec7[0] = -(fConst62 * (fConst61 * fRec7[1] - fConst58 * (fConst57 * fRec8[0] + fConst56 * fRec8[1])));
			fRec6[0] = -(fConst71 * (fConst70 * fRec6[1] - fConst67 * (fConst66 * fRec7[0] + fConst65 * fRec7[1])));
			fRec5[0] = -(fConst80 * (fConst79 * fRec5[1] - fConst76 * (fConst75 * fRec6[0] + fConst74 * fRec6[1])));
			fRec4[0] = -(fConst89 * (fConst88 * fRec4[1] - fConst85 * (fConst84 * fRec5[0] + fConst83 * fRec5[1])));
			fRec3[0] = -(fConst98 * (fConst97 * fRec3[1] - fConst94 * (fConst93 * fRec4[0] + fConst92 * fRec4[1])));
			fRec2[0] = -(fConst107 * (fConst106 * fRec2[1] - fConst103 * (fConst102 * fRec3[0] + fConst101 * fRec3[1])));
			fRec26[0] = -(fConst8 * (fConst7 * fRec26[1] - (fConst112 * fRec14[0] + fConst111 * fRec14[1])));
			fRec25[0] = -(fConst17 * (fConst16 * fRec25[1] - fConst117 * (fConst116 * fRec26[0] + fConst115 * fRec26[1])));
			fRec24[0] = -(fConst26 * (fConst25 * fRec24[1] - fConst122 * (fConst121 * fRec25[0] + fConst120 * fRec25[1])));
			fRec23[0] = -(fConst35 * (fConst34 * fRec23[1] - fConst127 * (fConst126 * fRec24[0] + fConst125 * fRec24[1])));
			fRec22[0] = -(fConst44 * (fConst43 * fRec22[1] - fConst132 * (fConst131 * fRec23[0] + fConst130 * fRec23[1])));
			fRec21[0] = -(fConst53 * (fConst52 * fRec21[1] - fConst137 * (fConst136 * fRec22[0] + fConst135 * fRec22[1])));
			fRec20[0] = -(fConst62 * (fConst61 * fRec20[1] - fConst142 * (fConst141 * fRec21[0] + fConst140 * fRec21[1])));
			fRec19[0] = -(fConst71 * (fConst70 * fRec19[1] - fConst147 * (fConst146 * fRec20[0] + fConst145 * fRec20[1])));
			fRec18[0] = -(fConst80 * (fConst79 * fRec18[1] - fConst152 * (fConst151 * fRec19[0] + fConst150 * fRec19[1])));
			fRec17[0] = -(fConst89 * (fConst88 * fRec17[1] - fConst157 * (fConst156 * fRec18[0] + fConst155 * fRec18[1])));
			fRec16[0] = -(fConst98 * (fConst97 * fRec16[1] - fConst162 * (fConst161 * fRec17[0] + fConst160 * fRec17[1])));
			fRec15[0] = -(fConst107 * (fConst106 * fRec15[1] - fConst167 * (fConst166 * fRec16[0] + fConst165 * fRec16[1])));
			fRec28[0] = 0.06279052f * fRec29[1] + 0.9980267f * fRec28[1];
			fRec29[0] = float(1 - iVec0[1]) + 0.9980267f * fRec29[1] - 0.06279052f * fRec28[1];
			int iTemp2 = (fRec28[1] <= 0.0f) & (fRec28[0] > 0.0f);
			fRec27[0] = fRec27[1] * float(1 - iTemp2) + 4.656613e-10f * fTemp0 * float(iTemp2);
			float fTemp3 = ((iSlow1) ? ((iSlow4) ? fRec27[0] : std::min<float>(1.0f, std::max<float>(-1.0f, fConst168 * fRec15[0]))) : ((iSlow2) ? std::min<float>(1.0f, std::max<float>(-1.0f, fConst108 * fRec2[0])) : ((iSlow3) ? 1e+01f * (0.049922034f * fRec1[0] + 0.0506127f * fRec1[2] - (0.095993534f * fRec1[1] + 0.004408786f * fRec1[3])) : fTemp1)));
			output0[i0] = FAUSTFLOAT(fTemp3);
			output1[i0] = FAUSTFLOAT(fTemp3);
			iVec0[1] = iVec0[0];
			iRec0[1] = iRec0[0];
			fVec1[1] = fVec1[0];
			for (int j0 = 3; j0 > 0; j0 = j0 - 1) {
				fRec1[j0] = fRec1[j0 - 1];
			}
			fRec14[1] = fRec14[0];
			fRec13[1] = fRec13[0];
			fRec12[1] = fRec12[0];
			fRec11[1] = fRec11[0];
			fRec10[1] = fRec10[0];
			fRec9[1] = fRec9[0];
			fRec8[1] = fRec8[0];
			fRec7[1] = fRec7[0];
			fRec6[1] = fRec6[0];
			fRec5[1] = fRec5[0];
			fRec4[1] = fRec4[0];
			fRec3[1] = fRec3[0];
			fRec2[1] = fRec2[0];
			fRec26[1] = fRec26[0];
			fRec25[1] = fRec25[0];
			fRec24[1] = fRec24[0];
			fRec23[1] = fRec23[0];
			fRec22[1] = fRec22[0];
			fRec21[1] = fRec21[0];
			fRec20[1] = fRec20[0];
			fRec19[1] = fRec19[0];
			fRec18[1] = fRec18[0];
			fRec17[1] = fRec17[0];
			fRec16[1] = fRec16[0];
			fRec15[1] = fRec15[0];
			fRec28[1] = fRec28[0];
			fRec29[1] = fRec29[0];
			fRec27[1] = fRec27[0];
		}
	}

};

#ifdef FAUST_UIMACROS
	
	#define FAUST_FILE_NAME "noise.dsp"
	#define FAUST_CLASS_NAME "_noise"
	#define FAUST_COMPILATION_OPIONS "-lang cpp -rui -nvi -ct 1 -cn _noise -scn ::faust::dsp -es 1 -mcd 16 -mdd 1024 -mdy 33 -uim -single -ftz 0"
	#define FAUST_INPUTS 0
	#define FAUST_OUTPUTS 2
	#define FAUST_ACTIVES 1
	#define FAUST_PASSIVES 0

	FAUST_ADDHORIZONTALSLIDER("Mode", fHslider0, 0.0f, 0.0f, 4.0f, 1.0f);

	#define FAUST_LIST_ACTIVES(p) \
		p(HORIZONTALSLIDER, Mode, "Mode", fHslider0, 0.0f, 0.0f, 4.0f, 1.0f) \

	#define FAUST_LIST_PASSIVES(p) \

#endif

#endif
