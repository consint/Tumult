/*
Tumult makes noise.

Creator: Consistent Interruption
License: GPLv3

https://www.consint.net
https://github.com/consint/Tumult

Created with Hise (https://hise.dev/) 
*/

Content.makeFrontInterface(490, 532);

Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Roboto-Medium.ttf", "Roboto-Medium");
Engine.setGlobalFont("Roboto-Medium");

// Include
include("icons.js");

const var NUMBER_NOISES = 100;
const var NUMBER_CORE_SAMPLES = 45;
const var NUMBER_NOISE_PLETHORA_SAMPLES = 50;
const var CORE_SIZE = 111739330;
const var PLETHORA_SIZE = 154946200;

// ##############
// Sample Check
// ##############
const var pnlError = Content.getComponent("pnlError");
const var pnlSampleFolderLocation = Content.getComponent("pnlSampleFolderLocation");

const var sampleFolder = FileSystem.getFolder(FileSystem.Samples);
pnlSampleFolderLocation.set("text", sampleFolder.toString(0));

const var humSamples = ["hum2_alienhum1.wav", "hum5_vhs-hum.wav", "hum3_joedeshon__electrical_hum_01_cut.wav", "hum1_0ktober_hyperspace_cut.wav", "hum4_loose-connection-feedback-hum.wav"];
const var machineSamples = ["machine9_thailand-hotel-hallway-heavy-ventilation-hum-distant-voices-man-spits-middle.wav", "machine6_lettersort.wav", "machine7_oven-hum-2_cut.wav", "machine3_fridge-hum-kitchen-2012_cut.wav", "machine4_fridge-hum-loud-saint-john_cut.wav", "machine5_furnace-propane-pump-hum-rattle-nearby.wav", "machine1_computer_fan_hum_cut.wav", "machine11_washing-machine-rinse.wav", "machine2_dough-machine-electricity-001_cut.wav", "machine8_tattoo-air-conditioning-blowing-traffic-hum-outside_cut.wav", "machine10_vending-machine-hum_cut.wav"];
const var staticSamples = ["static6_tv-static_cut.wav", "static5_radio-fuzz-for-old-radio-broadcast-ff233_cut.wav", "static1_electric-zap-electricity-2.wav", "static3_film_static_03_cut.wav", "static2_electrical-noise.wav", "static4_gramophone_stereo.wav"];
const var vinylSamples = ["vinyl3_Vinyl Dust2.wav", "vinyl2_oldvinyl_128.wav", "vinyl4_Vinyl Crackle Analogue 1.wav", "vinyl5_vinyl-crackle-1_edit.wav", "vinyl1_Runoff 139 BPM.wav"];
const var worldSamples = ["fire4_campfire.wav", "crowd_large_crowd_medium_distance_stereo.wav", "waterfall2_krka_waterfall2_f_4824.wav", "fire3_campfire-01.wav", "rain2_forest-cabin-summer-rain-5.wav", "fire1_ambiance_campfire_loop_stereo.wav", "city1_city-ambiance-heavy-snow-wind.wav", "rain3_rain-and-thunder-in-the-countryside.wav", "rain1_field_la-rain_park_under-stone-bridge_02.wav", "rain5_rain-thunder-and-traffic.wav", "waterfall1_hidden-waterfall.wav", "waterfall3_turbulent-river-waterfall.wav", "fire2.wav", "waterfall4_sound.wav", "rain4_rain-in-the-midnight-city.wav", "underground_large-underground-metro-station-heavy-ventilation-and-distant-echo-voices.wav", "city3_distant-city-evening-traffic-5th-floor-balcony.wav", "city2_city-ambience-at-night-3.wav"];
const var plethoraASamples = ["A3-xModRingSine_1.wav", "A3-xModRingSine_2.wav", "A4-CrossModRing_1.wav", "A0-RadioOhNo_1.wav", "A9-Basurilla_1.wav", "A8-GrainGlitchIII_2.wav", "A6-GrainGlitch_1.wav", "A2-xModRingSqr.wav", "A8-GrainGlitchIII_1.wav", "A4-CrossModRing_2.wav", "A1-Rwalk_SineFMFlange.wav", "A7-GrainGlitchII_1.wav", "A7-GrainGlitchII_2.wav", "A9-Basurilla_2.wav", "A5-Resonoise_long.wav", "A0-RadioOhNo_2.wav", "A6-GrainGlitch_2.wav"];
const var plethoraBSamples = ["B6-PrimecCnoise.wav", "B3-SineFMcluster.wav", "B5-Primecluster.wav", "B4-TriFMcluster.wav", "B1-PwCluster.wav", "B7-FibonacciCluster.wav", "B8-PartialCluster.wav", "B0-ClusterSaw.wav", "B2-CrCluster2.wav", "B9-PhasingCluster.wav"];
const var plethoraCSamples = ["C4-ArrayOnTheRocks_1.wav", "C9-Rwalk_LFree_1.wav", "C9-Rwalk_LFree_2.wav", "C8-Rwalk_BitCrushPW_1.wav", "C9-Rwalk_LFree_3.wav", "C6-WhoKnows_1.wav", "C2-WakingFilomena_1.wav", "C2-WakingFilomena_2.wav", "C1-Atari.wav", "C8-Rwalk_BitCrushPW_2.wav", "C3-P_S_H.wav", "C6-WhoKnows_3.wav", "C7-SatanWorkout_2.wav", "C5-ExistencelsPain_1.wav", "C4-ArrayOnTheRocks_2.wav", "C6-WhoKnows_2.wav", "C4-ArrayOnTheRocks_4.wav", "C0-BasuraTotal_2.wav", "C7-SatanWorkout_1.wav", "C8-Rwalk_BitCrushPW_3.wav", "C0-BasuraTotal_1.wav", "C4-ArrayOnTheRocks_3.wav", "C5-ExistencelsPain_2.wav"];
const var plethoraFolder = sampleFolder.getChildFile("noiseplethora");
const var humFolder = sampleFolder.getChildFile("hum");
const var machineFolder = sampleFolder.getChildFile("machine");
const var staticFolder = sampleFolder.getChildFile("static");
const var vinylFolder = sampleFolder.getChildFile("vinyl");
const var worldFolder = sampleFolder.getChildFile("world");
const var plethoraA = plethoraFolder.getChildFile("A");
const var plethoraB = plethoraFolder.getChildFile("B");
const var plethoraC = plethoraFolder.getChildFile("C");

const var allCoreFolders = [humFolder, machineFolder, staticFolder, vinylFolder, worldFolder];
const var allPlethoraFolders = [plethoraA, plethoraB, plethoraC];
const var allCoreSamples = [humSamples, machineSamples, staticSamples, vinylSamples, worldSamples];
const var allPlethoraSamples = [plethoraASamples, plethoraBSamples, plethoraCSamples];

reg coreSamplesExists = false;
reg plethoraSamplesExists = false;

inline function sampleCheck(allFolders, allSamples)
{
	local sampleSize = 0;

	for (i = 0; i < allFolders.length; i++)
	{
		for (k = 0; k < allSamples[i].length; k++)
		{
			local file = allFolders[i].getChildFile(allSamples[i][k]);
			
			if (!file.isFile())
				return false;
			
			sampleSize += file.getSize();
		}
	}
	
	if (sampleSize < CORE_SIZE)
			return false;
	
	return true;
}

inline function checkSamples()
{
	// Sample Directory
	if (!sampleFolder.isDirectory())
	{
		pnlError.set("text", "Sample folder not found");
		coreSamplesExists = false;
		plethoraSamplesExists = false;
		pnlError.set("visible", 1);	
		return;
	}
	
	// Samples
	local core = sampleCheck(allCoreFolders, allCoreSamples);
	local plethora = sampleCheck(allPlethoraFolders, allPlethoraSamples);
	
	coreSamplesExists = core;
	plethoraSamplesExists = plethora;
	
	if (!core && !plethora)
	{
		pnlError.set("text", "No samples found");
		pnlError.set("visible", 1);
	}
	else if (core && !plethora)
	{
		pnlError.set("text", "Noise Plethora samples not found");
		pnlError.set("visible", 1);
	}
	else if (!core && plethora)
	{
		pnlError.set("text", "Core samples not found");
		pnlError.set("visible", 1);
	}
	else if (core && plethora)
	{
		pnlError.set("visible", 0);
	}
}
checkSamples();


// Include
include("loadCustomSample.js");


	

// ##############
// LAF
// ##############
const var laf = Engine.createGlobalScriptLookAndFeel();

Content.setValuePopupData({
    "fontName":"Roboto-Medium",
    "fontSize": 12,
    "borderSize": 0,
    "borderRadius": 3,
    "margin": 2,
    "bgColour": 0x00,
    "itemColour": 0xFF393F3F,
    "itemColour2": 0xFF262929,
     "textColour": 0xFFE6E3DB 
});

// Background
const var pnlBackground = Content.getComponent("pnlBackground");

reg graphicNoise = {
	"alpha": 0.009,
	"monochromatic": 1,
	"scaleFactor": 0.7
};

pnlBackground.setPaintRoutine(function(g)
{
	var a = pnlBackground.getLocalBounds(0);
	var headerHight = 50;
	var masterHight = 60;
	var interfaceHigh = 500;

	// Background
	g.setGradientFill([pnlBackground.get("itemColour2"), 250, 0, 0xFF141616, a[2]-250, a[3]]);
	g.fillRect([0, 0, a[2], a[3]]);
	
	// Overlay
	g.setGradientFill([pnlBackground.get("itemColour"), 450, headerHight, pnlBackground.get("bgColour"), a[2], interfaceHigh]);
	g.fillRoundedRectangle([2, headerHight, a[2]-6, 480], 5);
	
	// Back Switch
	g.setColour(Colours.withAlpha(pnlBackground.get("itemColour2"), 0.1));
	g.fillEllipse([67, 137, 106, 106]);
	
	// Back Knobs
	g.setColour(Colours.withAlpha(pnlBackground.get("itemColour2"), 0.1));
	g.fillEllipse([18, 63, 34, 34]);
	g.fillEllipse([408, 63, 34, 34]);
	g.fillEllipse([233, 173, 54, 54]);
	g.fillEllipse([303, 143, 54, 54]);
	g.fillEllipse([373, 183, 54, 54]);

	// Lines	
	g.setColour(0xFF1E2222);
	g.drawLine(7, a[2]-9, headerHight, headerHight, 1);
	g.setColour(pnlBackground.get("textColour"));
	g.drawLine(7, a[2]-9, headerHight+1, headerHight+1, 0.6);

	g.setColour(0xFF1E2222);
	g.drawLine(2, a[2]-4, masterHight+headerHight, masterHight+headerHight, 1);
	g.setColour(pnlBackground.get("textColour"));
	g.drawLine(2, a[2]-4, masterHight+headerHight+1, masterHight+headerHight+1, 0.6);

	g.setColour(0xFF1E2222);
	g.drawLine(2, a[2]-4, 300, 300, 1);
	g.setColour(pnlBackground.get("textColour"));
	g.drawLine(2, a[2]-4, 301, 301, 0.6);

	// Noise
	g.addNoise(graphicNoise);
});

// Buttons 
const var ftEQ = Content.getComponent("ftEQ");
const var btnLogo = Content.getComponent("btnLogo");
reg dragHandleic2 = ftEQ.get("itemColour2");
reg dragHandleic3 = ftEQ.get("itemColour3");
reg dragHandletxtc = ftEQ.get("textColour");
reg dragHandleWidth = 14;

laf.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	
	if (obj.value)
	{
		g.setColour(obj.textColour);
		dragHandleic2 = ftEQ.get("itemColour2");
		dragHandleic3 = ftEQ.get("itemColour3");
		dragHandletxtc = ftEQ.get("textColour");
	}
	else
	{
		g.setColour(obj.itemColour2);
		dragHandleic2 = Colours.withAlpha(ftEQ.get("itemColour2"), 0.3);
		dragHandleic3 = Colours.withAlpha(ftEQ.get("itemColour3"), 0.3);
		dragHandletxtc = Colours.withAlpha(ftEQ.get("textColour"), 0.3);
	}
	
	if (obj.text == "btnSelectRight")
	{
		g.fillTriangle(obj.area, Math.PI/2);
	}
	else if (obj.text == "btnSelectLeft")
	{
		g.fillTriangle(obj.area, 3*Math.PI/2);
	}
	else if (obj.text == "eq_enable_highpass")
	{
		// drag handle
		g.setColour(dragHandleic3);
		g.fillEllipse([5, 1, dragHandleWidth, dragHandleWidth]);
		
		g.setColour(dragHandletxtc);
		g.drawEllipse([5, 1, dragHandleWidth, dragHandleWidth], 1); 
		
		g.setColour(dragHandletxtc);
		g.setFont("Roboto-Medium", 13);
		g.drawAlignedText("1", [5, 1, dragHandleWidth, dragHandleWidth], "centred");

		// icon
		g.fillPath(highpass, [30, 4, 15, 8]);
	}
	else if (obj.text == "eq_enable_bell1")
	{
		// drag handle
		g.setColour(dragHandleic3);
		g.fillEllipse([5, 1, dragHandleWidth, dragHandleWidth]);
		
		g.setColour(dragHandletxtc);
		g.drawEllipse([5, 1, dragHandleWidth, dragHandleWidth], 1); 
		
		g.setColour(dragHandletxtc);
		g.setFont("Roboto-Medium", 13);
		g.drawAlignedText("2", [5, 1, dragHandleWidth, dragHandleWidth], "centred");
	}
	else if (obj.text == "eq_enable_bell2")
	{
		// drag handle
		g.setColour(dragHandleic3);
		g.fillEllipse([5, 1, dragHandleWidth, dragHandleWidth]);
		
		g.setColour(dragHandletxtc);
		g.drawEllipse([5, 1, dragHandleWidth, dragHandleWidth], 1); 
		
		g.setColour(dragHandletxtc);
		g.setFont("Roboto-Medium", 13);
		g.drawAlignedText("3", [5, 1, dragHandleWidth, dragHandleWidth], "centred");
		
		// icon
		g.fillPath(bell, [30, 3.5, 18, 10]);
	}
	else if (obj.text == "eq_enable_bell3")
	{
		// drag handle
		g.setColour(dragHandleic3);
		g.fillEllipse([5, 1, dragHandleWidth, dragHandleWidth]);
		
		g.setColour(dragHandletxtc);
		g.drawEllipse([5, 1, dragHandleWidth, dragHandleWidth], 1); 
		
		g.setColour(dragHandletxtc);
		g.setFont("Roboto-Medium", 13);
		g.drawAlignedText("4", [5, 1, dragHandleWidth, dragHandleWidth], "centred");
	}
	else if (obj.text == "eq_enable_lowpass")
	{
		// drag handle
		g.setColour(dragHandleic3);
		g.fillEllipse([5, 1, dragHandleWidth, dragHandleWidth]);
		
		g.setColour(dragHandletxtc);
		g.drawEllipse([5, 1, dragHandleWidth, dragHandleWidth], 1); 
		
		g.setColour(dragHandletxtc);
		g.setFont("Roboto-Medium", 13);
		g.drawAlignedText("5", [5, 1, dragHandleWidth, dragHandleWidth], "centred");
		
		// icon
		g.fillPath(lowpass, [30, 4, 15, 8]);
	}
	else if (obj.text =="btnEdit")
	{
		g.drawPath(edit, [1, 1, a[2]-2, a[3]-2], 1);
	}
	else if (obj.text == "btnLogo")
	{
		g.setColour(btnLogo.get("textColour"));
		g.fillPath(ciLogo, btnLogo.getLocalBounds(0));
	}
	else if (obj.text == "BYPASS")
	{
		g.fillPath(bypass, a);
	}
	else if (obj.text == "Settings")
	{
		g.drawPath(settings, a, 1);
	}
	else if (obj.text == "Add")
	{
		g.fillPath(add, a);
	}
	else if (obj.text == "EQ")
	{
		g.setFont("Roboto-Medium", 15);
		g.drawAlignedText(obj.text, a, "centred");
	}
	else if (obj.text.contains("consint"))
	{
		g.setFont("Roboto-Medium", 14);
		obj.over == 1 ? g.setColour(0xffffffff) : g.setColour(obj.textColour);
		g.drawAlignedText(obj.text, a, "centred");
	}
	else
	{
		g.setFont("Roboto-Medium", 13);
		g.drawAlignedText(obj.text, obj.area, "centred");
	}
});

// Buttons light
const var lafBtnLight = Content.createLocalLookAndFeel();
const var btnChangeSampleFolder = Content.getComponent("btnChangeSampleFolder");
const var btnGotIt = Content.getComponent("btnGotIt");
const var btnDeleteYes = Content.getComponent("btnDeleteYes");
const var btnDeleteNo = Content.getComponent("btnDeleteNo");
const var btnExistsYes = Content.getComponent("btnExistsYes");
const var btnExistsNo = Content.getComponent("btnExistsNo");

btnChangeSampleFolder.setLocalLookAndFeel(lafBtnLight);
btnGotIt.setLocalLookAndFeel(lafBtnLight);
btnDeleteYes.setLocalLookAndFeel(lafBtnLight);
btnDeleteNo.setLocalLookAndFeel(lafBtnLight);
btnExistsYes.setLocalLookAndFeel(lafBtnLight);
btnExistsNo.setLocalLookAndFeel(lafBtnLight);
btnFImportYes.setLocalLookAndFeel(lafBtnLight);
btnFImportCancel.setLocalLookAndFeel(lafBtnLight);
btnFImportSelect.setLocalLookAndFeel(lafBtnLight);
btnMissingDelete.setLocalLookAndFeel(lafBtnLight);
btnMissingLoad.setLocalLookAndFeel(lafBtnLight);
btnMissingCancel.setLocalLookAndFeel(lafBtnLight);

lafBtnLight.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	var alpha = (obj.enabled == 1) ? 1 : 0.3;
	
	obj.over == 1 ? g.setColour(Colours.withAlpha(obj.itemColour1, alpha)) : g.setColour(Colours.withAlpha(obj.bgColour, alpha));
	g.fillRoundedRectangle(a, 3);
	
	g.setFont("Roboto-Medium", 14);
	g.setColour(Colours.withAlpha(obj.textColour, alpha));
	g.drawAlignedText(obj.text, a, "centred");
});

// Knobs
laf.registerFunction("drawRotarySlider", function(g, obj)
{
	if(!obj.text.contains("eq"))
	{
		g.setGradientFill([0xFF414848, 0, 0, obj.itemColour1, 20, obj.area[2]]);
		g.fillEllipse([1, 1, obj.area[2]-2, obj.area[2]-2]);
	}
	
	var backColour;
	var txtColour;
	
	if (obj.enabled)
	{
		backColour = obj.bgColour;
		txtColour = obj.textColour;
	}
	else
	{
		backColour = Colours.withAlpha(obj.bgColour, 0.3);
		txtColour = Colours.withAlpha(obj.textColour, 0.3);
	}
	
	if (obj.text.contains("eq_Freq"))
	{
		g.setFont("Roboto-Medium", 13);
		g.setColour(txtColour);
		g.drawAlignedText(obj.value + " Hz", [0, 0, obj.area[2], obj.area[3]], "centred");
	}
	else if (obj.text.contains("eq_Q"))
	{
		g.setFont("Roboto-Medium", 13);
		g.setColour(txtColour);
		g.drawAlignedText(Engine.doubleToString(obj.value, 2) + " Q", [0, 0, obj.area[2], obj.area[3]], "centred");
	}
	else if (obj.text.contains("eq_Gain"))
	{
		g.setFont("Roboto-Medium", 13);
		g.setColour(txtColour);
		g.drawAlignedText(Engine.doubleToString(obj.value, 2) + " dB", [0, 0, obj.area[2], obj.area[3]], "centred");
	}
	else
	{
		var ellipseShift = obj.area[2]*0.1;
		
		g.setGradientFill([obj.itemColour2, obj.area[0], obj.area[0], backColour, obj.area[1], obj.area[2] * 0.75]);
		g.fillEllipse([ellipseShift, ellipseShift, obj.area[2] - ellipseShift*2, obj.area[2] - ellipseShift*2]);
		
		var startOffset = 2.5;
		var arcThickness = 0.03;
		var arcWidth = 1.0 - 2.0 * arcThickness;
		var endOffset = startOffset * 2.0 * obj.valueNormalized -startOffset;
		
		if (obj.text == "master_knbSwitch")
		{
			g.setColour(txtColour);
			startOffset = 0;
			endOffset = (obj.valueNormalized - 0.5) * 5;
		}

		// Name and Value
		g.setColour(txtColour);
		
		if (!obj.text.contains("master_"))
		{
			// Name
			g.setFont("Roboto-Medium", 13);
			g.drawAlignedText(obj.text, [obj.area[0], obj.area[2] + 1, obj.area[2], 10], "centred");
			
			// Value
			g.setFont("Roboto-Medium", 12);
			var yShift = 14.5;
			g.drawAlignedText(Engine.doubleToString(obj.value, 2), [obj.area[0], obj.area[2] + yShift, obj.area[2], 10], "centred");
		}
		if (obj.text.contains("Gain"))
		{
			startOffset = 0;
			endOffset = (2.5 * obj.value) / obj.max;
		}
		
		// Arc
		var K = Content.createPath();

		K.addArc([arcThickness * 2, arcThickness * 2, arcWidth - arcThickness * 2, arcWidth - arcThickness * 2], -startOffset, endOffset);
		var pathArea = K.getBounds(obj.area[2]);
		
		var KStyle = {};
		KStyle.EndCapStyle = "rounded";
		KStyle.JointStyle = "curved";
		KStyle.Thickness = obj.area[2] * arcThickness;
		
		g.drawPath(K, pathArea, KStyle);
		
		// Indicator
		var indiDia = obj.area[2]/10;
		g.rotate(endOffset, [obj.area[2] * 0.5, obj.area[2] * 0.5]);
		g.fillEllipse([obj.area[2] / 2 - indiDia / 2, obj.area[2]/6.25, indiDia, indiDia]);
	}
});

//Knob Name and Value Display
//Gain
const var knbNoiseGain = Content.getComponent("knbNoiseGain");
const var pnlGainName = Content.getComponent("pnlGainName");
const var pnlGainValue = Content.getComponent("pnlGainValue");

pnlGainName.setPaintRoutine(function(g)
{
	g.setFont("Roboto-Medium", 13);
	g.setColour(pnlGainName.get("textColour"));
	g.drawAlignedText(knbNoiseGain.get("text").replace("master_", ""), pnlGainName.getLocalBounds(0), "centred");
});
pnlGainValue.setPaintRoutine(function(g)
{
	g.setFont("Roboto-Medium", 12);
	g.setColour(pnlGainName.get("textColour"));
	g.drawAlignedText(Engine.doubleToString(knbNoiseGain.getValue(), 2) + " dB", pnlGainValue.getLocalBounds(0), "centred");
});
inline function onknbNoiseGainControl(component, value)
{
	sntumult.setAttribute(sntumult.noise_gain, value);
	pnlGainValue.repaint();
};
Content.getComponent("knbNoiseGain").setControlCallback(onknbNoiseGainControl);

// Mix
const var knbMix = Content.getComponent("knbMix");
const var pnlMixName = Content.getComponent("pnlMixName");
const var pnlMixValue = Content.getComponent("pnlMixValue");

pnlMixName.setPaintRoutine(function(g)
{
	g.setFont("Roboto-Medium", 13);
	g.setColour(pnlMixName.get("textColour"));
	g.drawAlignedText(knbMix.get("text").replace("master_", ""), pnlMixName.getLocalBounds(0), "centred");
});
pnlMixValue.setPaintRoutine(function(g)
{
	g.setFont("Roboto-Medium", 12);
	g.setColour(pnlMixValue.get("textColour"));
	g.drawAlignedText(Engine.doubleToString(knbMix.getValue(), 2), pnlMixValue.getLocalBounds(0), "centred");
});
inline function onknbMixControl(component, value)
{
	sntumult.setAttribute(sntumult.Mix, value);
	pnlMixValue.repaint();
};
Content.getComponent("knbMix").setControlCallback(onknbMixControl);

// Switch 
const var pnlRaw = Content.getComponent("pnlRaw");
const var pnlSwitchValue = Content.getComponent("pnlSwitchValue");
const var knbSwitch = Content.getComponent("knbSwitch");

reg switchName = "Raw";

pnlRaw.setPaintRoutine(function(g)
{
	var a = pnlRaw.getLocalBounds(0);
	
	g.setFont("Roboto-Medium", 13);
	g.setColour(pnlRaw.get("textColour"));
	g.drawAlignedText(switchName, pnlRaw.getLocalBounds(0), "centred");
});
pnlSwitchValue.setPaintRoutine(function(g)
{
	var a = pnlSwitchValue.getLocalBounds(0);
	
	g.setFont("Roboto-Medium", 12);
	g.setColour(pnlSwitchValue.get("textColour"));
	g.drawAlignedText(Engine.doubleToString(knbSwitch.getValue(), 2), pnlSwitchValue.getLocalBounds(0), "centred");
});

// Combobox
laf.registerFunction("drawComboBox", function(g, obj)
{
	var a = obj.area;

    g.setGradientFill([obj.itemColour2, 49, 0, obj.bgColour, 51, a[3]]);
    g.fillRoundedRectangle(a, 3);
	
    g.setColour(obj.textColour);
    g.setFont("Roboto-Medium", 13);
    g.drawAlignedText(obj.text, [a[0] + 10, a[1], a[2]-10, a[3]], "left");
    var h = a[3];
    g.fillTriangle([a[0] + a[2] - h/2.75 - 10, a[1] + h/3, h/2.25, h/3.25], Math.PI);
});

// cmbSelect
const var lafCmbSelect = Content.createLocalLookAndFeel();
cmbSelect.setLocalLookAndFeel(lafCmbSelect);

lafCmbSelect.registerFunction("drawComboBox", function(g, obj)
{
	 var a = obj.area;

     g.setGradientFill([obj.itemColour2, 49, 0, obj.bgColour, 51, a[3]]);
     g.fillRoundedRectangle(a, 3);
 
     g.setColour(cmbSelect.get("textColour"));
     g.setFont("Roboto-Medium", 13);
     g.drawAlignedText(obj.text, [a[0] + 10, a[1], a[2]-10, a[3]], "left");
     var h = a[3];
     g.fillTriangle([a[0] + a[2] - h/2.75 - 10, a[1] + h/3, h/2.25, h/3.25], Math.PI);
});

const var p = Content.createPath();
p.addTriangle([0, 0], [0, 1], [1, 0.5]);

lafCmbSelect.registerFunction("drawPopupMenuItem", function(g, obj)
{
	var a = obj.area;
	var txtColour = 0xBBE6E3DB;
	g.setFont("Roboto-Medium", 13);

	if (obj.isHighlighted && obj.isActive)
	{
		g.setGradientFill([cmbSelect.get("textColour"), 0, 0, 0x88E6E3DB, 0, a[3]]);
		g.fillRect(a);
		txtColour = 0xFF262929;
	}
	
	if (!obj.isActive)
		txtColour = 0x44E6E3DB;
	
	g.setColour(txtColour);
	
	// Submenu Triangle
	if (obj.hasSubMenu)
		g.fillPath(p, [a[2]-7, 7, 4, 7]);
	
	// Text
	g.drawAlignedText(obj.text, [25, 1, a[2], a[3]], "left");
	
	// Ticked
	var ticked = allSamples[cmbSelect.getValue()-1];

	if (cmbSelect.getValue() < 6)
	{
		ticked = ticked.replace("Noise::", "");
		if (obj.text == "Noise" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 5 && cmbSelect.getValue() < 11)
	{
		ticked = ticked.replace("Vinyl::", "");
		if (obj.text == "Vinyl" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 10 && cmbSelect.getValue() < 17)
	{
		ticked = ticked.replace("Static::", "");
		if (obj.text == "Static" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 16 && cmbSelect.getValue() < 28)
	{
		ticked = ticked.replace("Machine::", "");
		if (obj.text == "Machine" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 27 && cmbSelect.getValue() < 33)
	{
		ticked = ticked.replace("Hum::", "");
		if (obj.text == "Hum" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 32 && cmbSelect.getValue() < 51)
	{
		ticked = ticked.replace("World::", "");
		if (obj.text == "World" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 50 && cmbSelect.getValue() < 68)
	{
		ticked = ticked.replace("Noise Plethora::A::", "");
		if (obj.text == "Noise Plethora" && obj.hasSubMenu || obj.text == "A" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 67 && cmbSelect.getValue() < 78)
	{
		ticked = ticked.replace("Noise Plethora::B::", "");
		if (obj.text == "Noise Plethora" && obj.hasSubMenu || obj.text == "B" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 77 && cmbSelect.getValue() < 101)
	{
		ticked = ticked.replace("Noise Plethora::C::", "");
		if (obj.text == "Noise Plethora" && obj.hasSubMenu || obj.text == "C" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
	else if (cmbSelect.getValue() > 100)
	{
		ticked = ticked.replace("Custom::", "");
		if (obj.text == "Custom" && obj.hasSubMenu || ticked == obj.text)
			g.fillPath(check, [8, 6, 8, 10]);	
	}
});

// Filter Switches Comboboxes
const var lafCmbFilter = Content.createLocalLookAndFeel();
const var cmbFilter2Switch = Content.getComponent("cmbFilter2Switch");
const var cmbFilter4Switch = Content.getComponent("cmbFilter4Switch");

cmbFilter2Switch.setLocalLookAndFeel(lafCmbFilter);
cmbFilter4Switch.setLocalLookAndFeel(lafCmbFilter);

lafCmbFilter.registerFunction("drawComboBox", function(g, obj)
{
	var a = obj.area;
	
	if (obj.enabled)
		g.setColour(obj.textColour);
	else
		g.setColour(Colours.withAlpha(ftEQ.get("textColour"), 0.3));    
    
    if (obj.text == "bell")
    {
    	g.fillPath(bell, [8, 5, 18, 10]);
    }
    else if (obj.text == "highshelf")
    {
    	g.fillPath(highshelf, [8, 5, 18, 10]);
    }
    else if (obj.text == "lowshelf")
    {
    	g.fillPath(lowshelf, [8, 5, 18, 10]);
    }
    
    var h = a[3];
    g.fillTriangle([32, 6, 10, 8], Math.PI);
});

lafCmbFilter.registerFunction("drawPopupMenuItem", function(g, obj)
{
	var a = obj.area;
	var txtColour = 0xFFE6E3DB;
	
	if (obj.isHighlighted)
	{
		g.setGradientFill([txtColour, 0, 0, 0x88E6E3DB, 0, a[3]]);
		g.fillRect(a);
		txtColour = 0xFF262929;
	}
	
	if (obj.isTicked)
	{
		g.setColour(txtColour);
		g.fillPath(check, [8, 4, 8, 10]);
	}
	
	if (obj.text == "bell")
	{
		g.setColour(txtColour);
		g.fillPath(bell, [35, 4, 18, 10]);
	}
	else if (obj.text == "highshelf")
	{
		g.setColour(txtColour);
		g.fillPath(highshelf, [35, 4, 18, 10]);
	}
	else if (obj.text == "lowshelf")
	{
		g.setColour(txtColour);
		g.fillPath(lowshelf, [35, 4, 18, 10]);
	}
});

lafCmbFilter.registerFunction("getIdealPopupMenuItemSize", function(obj)
{
	return [57, 18];
});

// Settings
const var pnlSettings = Content.getComponent("pnlSettings");
const var pnlSettingsFFT = Content.getComponent("pnlSettingsFFT");
const var pnlSettingsHostPlay = Content.getComponent("pnlSettingsHostPlay");
const var ftSettings = Content.getComponent("ftSettings");
const var lafSettings = Content.createLocalLookAndFeel();
const var pnlMsgReload = Content.getComponent("pnlMsgReload");

ftSettings.setLocalLookAndFeel(lafSettings);

lafSettings.registerFunction("drawComboBox", function(g, obj)
{
	var a = obj.area;
	
    g.setGradientFill([ftSettings.get("itemColour2"), 49, 0, ftSettings.get("bgColour"), 51, a[3]]);
    g.fillRoundedRectangle(obj.area, 3);

    g.setColour(ftSettings.get("textColour"));
    g.setFont("Roboto-Medium", 13);
    g.drawAlignedText(obj.text, [a[0] + 10, a[1], a[2]-10, a[3]], "left");
    var h = a[3];
    g.fillTriangle([a[0] + a[2] - h/2.75 - 10, a[1] + h/3, h/2.25, h/3.25], Math.PI);
});

lafSettings.registerFunction("drawDialogButton", function(g, obj)
{
	var a = obj.area;
	
	obj.over == 1 ? g.setColour(Colours.withAlpha(ftSettings.get("textColour"), 0.13)) : g.setColour(Colours.withAlpha(ftSettings.get("textColour"), 0.1));
	g.fillRoundedRectangle(a, 3);
	
	g.setColour(ftSettings.get("textColour"));
	g.setFont("Roboto-Medium", 13);
	g.drawAlignedText(obj.text, a, "centred");	
});

// pnlSettings
pnlSettings.setPaintRoutine(function(g)
{
	var a = pnlSettings.getLocalBounds(0);
	
	g.setGradientFill([pnlBackground.get("itemColour"), 450, 0, pnlBackground.get("bgColour"), a[2], a[3]]);
	g.setOpacity(0.93);
	g.fillRoundedRectangle(a, 8);
	
	// Settings Border
	g.setColour(pnlBackground.get("textColour"));
	g.drawRoundedRectangle([25, 25, a[2]-50, 280], 3, 1);
	
	// Header Settings
	g.setColour(pnlBackground.get("itemColour"));
	g.fillRect([59, 24, 72, 2]);
	
	g.setColour(pnlSettings.get("textColour"));
	g.setFont("Roboto-Medium", 18);
	g.drawText("Settings", [60, 10, 70, 30]);
	
	g.addNoise(graphicNoise);
});

// pnlSettingsFFT
pnlSettingsFFT.setPaintRoutine(function(g)
{
	var a = pnlSettingsFFT.getLocalBounds(0);

	g.setColour(pnlSettingsFFT.get("textColour"));
	g.setFont("Roboto-Medium", 14);
	g.drawAlignedText("Show Spectrum Analyzer", a, "right");
});

// pnlSettingsHostPlay
pnlSettingsHostPlay.setPaintRoutine(function(g)
{
	var a = pnlSettingsHostPlay.getLocalBounds(0);
	
	g.setColour(pnlSettingsHostPlay.get("textColour"));
	g.setFont("Roboto-Medium", 14);
	g.drawAlignedText("Host Sync", a, "right");
});

// pnlError
pnlError.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	g.setColour(pnlError.get("textColour"));
	
	g.fillPath(warning, [0, 1, 16, 16]);
	g.setFont("Roboto-Medium", 14);
	g.drawAlignedText(pnlError.get("text"), [25, 0, a[2], a[3]], "left");
});

// pnlSampleFolderLocation
pnlSampleFolderLocation.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);

	g.setFont("Roboto-Medium", 14);
	g.setColour(this.get("textColour"));
	g.drawAlignedText("Sample Location:", [0, 2, a[2], a[3]*0.5], "centred");
	g.drawAlignedText(pnlSampleFolderLocation.get("text"), [0, a[3]*0.5+2, a[2], a[3]*0.5], "centred");
});

// pnlMsgReload
pnlMsgReload.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	// background plugin
	g.setGradientFill([pnlBackground.get("itemColour"), 450, 0, pnlBackground.get("bgColour"), a[2], a[3]]);
	g.setOpacity(0.90);
	g.fillRect(a);

	// background message
	g.setColour(this.get("bgColour"));
	g.fillRoundedRectangle([20, 160, 450, 160], 3);
	
	// Icon
	g.setColour(this.get("textColour"));
	g.fillPath(warning, [70, 190, 40, 40]);
	
	// Text
	g.setFont("Roboto-Medium", 15);
	g.drawMultiLineText(this.get("text"), [130, 205], 280, "centred", 5);
});

// About
const var pnlAbout = Content.getComponent("pnlAbout");

pnlAbout.setPaintRoutine(function(g)
{
	var a = pnlAbout.getLocalBounds(0);
	
	g.setColour(pnlAbout.get("textColour"));
	g.setFont("Roboto-Medium", 18);
	g.drawAlignedText("Tumult", [0, 15, a[2], 20], "centred");
	
	g.setFont("Roboto-Medium", 13);
	g.drawAlignedText("Consistent Interruption", [0, 35, a[2], 20], "centred");
	
	g.setFont("Roboto-Medium", 12);
	g.drawAlignedText("Version " + Engine.getVersion(), [0, 55, a[2], 20], "centred");
});


// EQ Back
const var pnlFFTBack = Content.getComponent("pnlFFTBack");

pnlFFTBack.setPaintRoutine(function(g)
{
	var a = pnlFFTBack.getLocalBounds(0);
	var hightEQDisplay = 90;
	
	// Drag
	g.setGradientFill([pnlFFTBack.get("itemColour"), 0, 10, pnlFFTBack.get("itemColour2"), 0, hightEQDisplay-10]);
	g.fillRoundedRectangle([0, 0, a[2], hightEQDisplay], 3);
	g.fillRect([0, 10, a[2], hightEQDisplay-10]);
	
	// Knobs
	g.setGradientFill([pnlFFTBack.get("textColour"), 443, hightEQDisplay+10, pnlFFTBack.get("bgColour"), a[2], a[3]]);
	g.fillRoundedRectangle([0, hightEQDisplay, a[2], a[3]-hightEQDisplay-2], 5);
	
	g.setColour(pnlFFTBack.get("textColour"));
	g.fillRect([0, hightEQDisplay, a[2], 10]);
	
	// Buttons
	g.setGradientFill([pnlFFTBack.get("itemColour"), 220, 95, pnlFFTBack.get("itemColour2"), 221, 120]);
	g.fillRect([0, 95, a[2], 25]);
	
	// Lines
	g.setColour(pnlFFTBack.get("textColour"));
	g.drawLine(90, 90, 120, 200, 1);
	g.drawLine(180, 180, 120, 200, 1);
	g.drawLine(270, 270, 120, 200, 1);
	g.drawLine(360, 360, 120, 200, 1);
	
	// border
	g.setColour(pnlFFTBack.get("itemColour"));
	g.drawRoundedRectangle([1, 1, a[2]-2, 188], 3, 2);
});

// EQ drag
const var paraEQ1 = Synth.getEffect("ParaEQ1");
const var lafFtEQ = Content.createLocalLookAndFeel();
ftEQ.setLocalLookAndFeel(lafFtEQ);

lafFtEQ.registerFunction("drawFilterBackground", function(g, obj)
{
});
lafFtEQ.registerFunction("drawFilterGridLines", function(g, obj)
{
});

lafFtEQ.registerFunction("drawFilterDragHandle", function(g, obj)
{
	var a = obj.area;
	var h = obj.handle;	
	
	if (obj.enabled)
	{
		dragHandleic2 = ftEQ.get("itemColour2");
		dragHandleic3 = ftEQ.get("itemColour3");
		dragHandletxtc = ftEQ.get("textColour");
	}
	else
	{
		dragHandleic2 = Colours.withAlpha(ftEQ.get("itemColour2"), 0.3);
		dragHandleic3 = Colours.withAlpha(ftEQ.get("itemColour3"), 0.3);
		dragHandletxtc = Colours.withAlpha(ftEQ.get("textColour"), 0.3);
	}

	g.setColour(dragHandleic3);
	g.fillEllipse([h[0]+4, h[1]+4, h[2]-8, h[3]-8]);
	
	g.setColour(dragHandletxtc);
	g.drawEllipse([h[0]+4, h[1]+4, h[2]-8, h[3]-8], 1); 
	
	g.setColour(dragHandletxtc);
	g.setFont("Roboto-Medium", 13);
	g.drawAlignedText(obj.index+1, h, "centred");
});

lafFtEQ.registerFunction("drawFilterPath", function(g, obj)
{
	g.setColour(Colours.withAlpha(ftEQ.get("textColour"), 1));
	g.drawPath(obj.path, obj.pathArea, 1);
});

// FFT
const var dbSource = Synth.getDisplayBufferSource("Script FX1");
const var dbFFT = dbSource.getDisplayBuffer(2);
const var btgFFT = Engine.createBackgroundTask("FFT");

const var BUFFER_LENGTH_FFT = 4096;

const var propertiesFFT = {
  "BufferLength": BUFFER_LENGTH_FFT,
  "NumChannels": 1
};

dbFFT.setRingBufferProperties(propertiesFFT);

const var pnlFFT = Content.getComponent("pnlFFT");

pnlFFT.setTimerCallback(function()
{
	btgFFT.callOnBackgroundThread(function(param)
	{
		pnlFFT.data.buffer = dbFFT.createPath(pnlFFT.getLocalBounds(0), [0, BUFFER_LENGTH_FFT, 0, 1.0], 0.0);
		pnlFFT.repaint();
	});
});

pnlFFT.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);

	g.fillAll(0x00);
	g.setGradientFill([this.get("itemColour"), 0, 60, this.get("itemColour2"), 0, a[3]]);
	
	g.fillPath(this.data.buffer, a);
});




































// ##############
// GUI Logic
// ##############

// Bypass
inline function onbtnBypassControl(component, value)
{
	sntumult.setBypassed(1-value);
	cmbSelect.changed();
};
Content.getComponent("btnBypass").setControlCallback(onbtnBypassControl);

// btnSettings
inline function onbtnSettingsControl(component, value)
{
	pnlSettings.set("visible", value);
	
	if (!value)
		return;
	
	if (btnAdd.getValue())
	{
		btnAdd.setValue(0);
		btnAdd.changed();
	}
};
Content.getComponent("btnSettings").setControlCallback(onbtnSettingsControl);

// btnLogo
const var btnSettings = Content.getComponent("btnSettings");
inline function onbtnLogoControl(component, value)
{
	if (!value)
		return;
	
	if (btnSettings.getValue())
	{
		btnSettings.setValue(0);
		btnSettings.changed();
	}
	else
	{
		btnSettings.setValue(1);
		btnSettings.changed();
	}
};
Content.getComponent("btnLogo").setControlCallback(onbtnLogoControl);

// btnAdd
reg tmpCmbSelectValue = "White";
reg masterGain = 0;
reg masterMix = 0.5;

inline function onbtnAddControl(component, value)
{
	pnlCustomSamples.set("visible", value);
	
	if (value)
	{
		// Clear the Sample Editor
		sntumult.setAttribute(sntumult.switch_noise, 0);
		clearSample();
		clearFolderImport();
		getSetPresetList();

		// hide pnlSettings
		btnSettings.setValue(0);
		btnSettings.changed();
		
		// enable Player in scriptnode
		sntumult.setAttribute(sntumult.switch_noise, 3);
		
		// set Switch to neutral
		sntumult.setAttribute(sntumult.switch_branch, 2);
		tmpCmbSelectValue = cmbSelect.getItemText();
		
		// save and set gain and mix
		masterGain = knbNoiseGain.getValue();
		masterMix = knbMix.getValue();
		
		knbNoiseGain.setValue(0);
		knbMix.setValue(0.5);
		
		knbNoiseGain.changed();
		knbMix.changed();
	}
	else
	{
		setNoiseSelectItems();
		
		local index = allSamples.findIndex(function(element){ return element.contains(tmpCmbSelectValue);});

		if (isDefined(index))
		{
			if (index > 4 && index < 50 && !coreSamplesExists)
				index = 0;
				
			if (index > 49 && index < 100 && !plethoraSamplesExists)
				index = 0;
			
			cmbSelect.setValue(index+1);
		}
		else
		{
			cmbSelect.setValue(1);
		}
		
		cmbSelect.changed();
		knbSwitch.changed();
		
		knbNoiseGain.setValue(masterGain);
		knbMix.setValue(masterMix);
		knbNoiseGain.changed();
		knbMix.changed();
	}
};
Content.getComponent("btnAdd").setControlCallback(onbtnAddControl);

const var gc = Engine.getGlobalRoutingManager();
const gcSetFFT = gc.getCable("gcSetFFT");

inline function oncmbSettingsAnalyzerControl(component, value)
{
	if (value == 1)
	{
		gcSetFFT.setValue(0);
		pnlFFT.startTimer(30);	
	}
	else if (value == 2)
	{
		gcSetFFT.setValue(1);
		pnlFFT.data.buffer = 0;
		pnlFFT.stopTimer();
		pnlFFT.repaint();
	}
};
Content.getComponent("cmbSettingsAnalyzer").setControlCallback(oncmbSettingsAnalyzerControl);

//
inline function showMessage(message)
{
	pnlMsgReload.set("text", message);
	pnlMsgReload.set("visible", 1);
}

// Change Sample Folder Location
inline function onbtnChangeSampleFolderControl(component, value)
{
	if (!value)
		return;
		
	FileSystem.browseForDirectory("UserHome",  function(result)
	{
    	if (result.isDirectory())
    	{
	    	Settings.setSampleFolder(result);
	    	pnlSampleFolderLocation.set("text", result.toString(0));
	    	pnlSampleFolderLocation.repaint();
	    	showMessage("In order for the settings to take effect, the plugin must be removed and reloaded.");
    	}
	});
};
Content.getComponent("btnChangeSampleFolder").setControlCallback(onbtnChangeSampleFolderControl);

// close pnlMsgReload
inline function onbtnGotItControl(component, value)
{
	if (value)
		pnlMsgReload.set("visible", 0);
};
Content.getComponent("btnGotIt").setControlCallback(onbtnGotItControl);

// Link Buttons
inline function onbtnLinkWebsiteControl(component, value)
{
	if (value)
		Engine.openWebsite("https://www.consint.net");
};
Content.getComponent("btnLinkWebsite").setControlCallback(onbtnLinkWebsiteControl);

inline function onbtnLinkGithubControl(component, value)
{
	if (value)
		Engine.openWebsite("https://github.com/consint");
};
Content.getComponent("btnLinkGithub").setControlCallback(onbtnLinkGithubControl);

inline function onbtnKofiControl(component, value)
{
	if (value)
		Engine.openWebsite("https://ko-fi.com/consint");
};
Content.getComponent("btnKofi").setControlCallback(onbtnKofiControl);


// Gate Displays
const var dbDuck = dbSource.getDisplayBuffer(0);
const var dbFollow = dbSource.getDisplayBuffer(1);
const var pnlDuck = Content.getComponent("pnlDuck");
const var btkGate = Engine.createBackgroundTask("gate");

reg isModulatet = 0;
reg isPlaying = 0;
reg isRunning = 0;

const var BUFFER_LENGTH_GATE = 32768;

const var propertiesGate = {
  "BufferLength": BUFFER_LENGTH_GATE,
  "NumChannels": 1
};

dbDuck.setRingBufferProperties(propertiesGate);
dbFollow.setRingBufferProperties(propertiesGate);

pnlDuck.setPaintRoutine(function(g)
{
	var a = pnlDuck.getLocalBounds(0);
	
	g.setGradientFill([pnlDuck.get("itemColour"), 35, 0, pnlDuck.get("bgColour"), 45, a[3]]);
	g.fillRoundedRectangle(a, 3);
	
	g.setColour(pnlDuck.get("textColour"));

	if (isModulatet == 1 && isRunning)
	{
		btkGate.callOnBackgroundThread(function(param)
		{
			pnlDuck.data.duck = dbDuck.createPath(pnlDuck.getLocalBounds(0), [0, BUFFER_LENGTH_GATE, 0, 1.0], 0.0);
		});
		
		g.drawPath(pnlDuck.data.duck, [-1, 3, a[2]+2, a[3]-6], 1);
	}
	else if (isModulatet == 2 && isRunning)
	{
		btkGate.callOnBackgroundThread(function(param)
		{
			pnlDuck.data.follow = dbFollow.createPath(pnlDuck.getLocalBounds(0), [0, BUFFER_LENGTH_GATE, 0, 1.0], 0.0);
		});
		
		g.flip(false, a);
		g.drawPath(pnlDuck.data.follow, [-1, 3, a[2]+2, a[3]-6], 1);
	}
});
pnlDuck.setTimerCallback(function()
{
	pnlDuck.repaint();
});

// Host Transport
const var sntumult = Synth.getEffect("Script FX1");
const var th = Engine.createTransportHandler();

inline function startDisplayTimer()
{
	if (isPlaying && isModulatet > 0)
	{
		pnlDuck.startTimer(30);
		isRunning = 1;
	}
	else
	{
		if (isRunning)
		{
			pnlDuck.stopTimer();
			isRunning = 0;
			pnlDuck.data.duck = 0;
			pnlDuck.data.follow = 0;
			pnlDuck.repaint();
		}
	}
}

inline function onSyncTransport(value)
{
	if (value)
	{
		isPlaying = 1;
		cmbSelect.changed();
	}
	else
	{
		isPlaying = 0;
		cmbSelect.changed();
	}
}

th.setOnTransportChange(true, onSyncTransport);

th.setOnTransportChange(false, function(value)
{
    if (value)
    {
    	startDisplayTimer();
    }
    else
    {
	    startDisplayTimer();
    }
});

// Knob Switch
const var pnlDuckBack = Content.getComponent("pnlDuckBack");
const var pnlFollowBack = Content.getComponent("pnlFollowBack");

const gcRaw = gc.getCable("gcRaw");

inline function onknbSwitchControl(component, value)
{
	// Duck
	if (value < 0)
	{
		if (isModulatet != 1)
		{
			switchName = "Duck";
			pnlRaw.changed();
			
			pnlDuckBack.set("visible", 1);
			pnlDuckBack.set("enabled", 1);
			pnlFollowBack.set("visible", 0);
			
			isModulatet = 1;
		}
		
		if (!isRunning)
			startDisplayTimer();
		
		sntumult.setAttribute(sntumult.switch_branch, 0);
		gcRaw.setValue(Math.abs(value));
		pnlSwitchValue.changed();
	}
	// Raw
	else if (value == 0)
	{
		if (isModulatet != 0)
		{
			switchName = "Raw";
			pnlRaw.changed();
			pnlSwitchValue.changed();
			pnlDuckBack.set("enabled", 0);
			pnlFollowBack.set("enabled", 0);
			
			startDisplayTimer();
			isModulatet = 0;
		}
		sntumult.setAttribute(sntumult.switch_branch, 2);
	}
	// Follow
	else if (value > 0)
	{
		if (isModulatet != 2)
		{
			switchName = "Follow";
			pnlRaw.changed();
			
			pnlDuckBack.set("visible", 0);
			pnlFollowBack.set("enabled", 1);
			pnlFollowBack.set("visible", 1);
			
			isModulatet = 2;
		}
		
		if (!isRunning)
			startDisplayTimer();

		sntumult.setAttribute(sntumult.switch_branch, 1);
		sntumult.setAttribute(sntumult.follow_amount, value);
		pnlSwitchValue.changed();
	}
};
Content.getComponent("knbSwitch").setControlCallback(onknbSwitchControl);


// Noise Select Buttons
inline function onbtnSelectLeftControl(component, value)
{
	if (!value)
		return;
	
	if (!coreSamplesExists && !plethoraSamplesExists)
	{
		if (cmbSelect.getValue() > 5 && cmbSelect.getValue() < 102)
		{	
			cmbSelect.setValue(5);
			cmbSelect.changed();
			return;
		}
	}
	else if (coreSamplesExists && !plethoraSamplesExists)
	{
		if (cmbSelect.getValue() > 50 && cmbSelect.getValue() < 102)
		{	
			cmbSelect.setValue(50);
			cmbSelect.changed();
			return;
		}
	}
	else if (!coreSamplesExists && plethoraSamplesExists)
	{
		if (cmbSelect.getValue() > 5 && cmbSelect.getValue() < 52)
		{
			cmbSelect.setValue(5);
			cmbSelect.changed();
			return;
		}
	}

	cmbSelect.setValue(cmbSelect.getValue() -1);
	cmbSelect.changed();
};
Content.getComponent("btnSelectLeft").setControlCallback(onbtnSelectLeftControl);

inline function onbtnSelectRightControl(component, value)
{
	if (!value)
		return;
	
	if (!coreSamplesExists && !plethoraSamplesExists)
	{
		if (cmbSelect.getValue() > 4 && cmbSelect.getValue() < 101)
		{	
			cmbSelect.setValue(101);
			cmbSelect.changed();
			return;
		}
	}
	else if (coreSamplesExists && !plethoraSamplesExists)
	{
		if (cmbSelect.getValue() > 49 && cmbSelect.getValue() < 101)
		{	
			cmbSelect.setValue(101);
			cmbSelect.changed();
			return;
		}
	}
	else if (!coreSamplesExists && plethoraSamplesExists)
	{
		if (cmbSelect.getValue() > 4 && cmbSelect.getValue() < 51)
		{
			cmbSelect.setValue(51);
			cmbSelect.changed();
			return;
		}
	}
	
	cmbSelect.setValue(cmbSelect.getValue() +1);
	cmbSelect.changed();
};
Content.getComponent("btnSelectRight").setControlCallback(onbtnSelectRightControl);

// Noise Select Combobox
const var btnSelectRight = Content.getComponent("btnSelectRight");
const var btnSelectLeft = Content.getComponent("btnSelectLeft");
const var cmbSettingsHostPlay = Content.getComponent("cmbSettingsHostPlay");

const var sampleMap = Synth.getAudioSampleProcessor("Script FX1").getAudioFile(1);

inline function playNoise(value)
{
	if (value <= 5) // Noises
	{			
		sntumult.setAttribute(sntumult.switch_noise, 1);
		sntumult.setAttribute(sntumult.noise, value-1);
	}
	else if (value > 5 && value <= 50) // sampled_noises
	{
		if (!coreSamplesExists)
			return;

		sampleMap.loadFile("{XYZ::SampleMap}" + "sampled_noises");
		sntumult.setAttribute(sntumult.switch_noise, 2);
		Synth.playNote(value-6, 124);
	}
	else if (value > 50 && value <= 100) // noise_plethora
	{
		if (!plethoraSamplesExists)
			return;

		sampleMap.loadFile("{XYZ::SampleMap}" + "noise_plethora");
		sntumult.setAttribute(sntumult.switch_noise, 2);
		Synth.playNote(value -51, 124);
	}
	else if (value > 100) // Custom Noises
	{
		sntumult.setAttribute(sntumult.switch_noise, 3);
		customLoad(cmbSelect.getItemText());
	}
}

inline function oncmbSelectControl(component, value)
{
	value == 1 ? btnSelectLeft.set("enabled", 0) : btnSelectLeft.set("enabled", 1);
	value == NUMBER_NOISES + numberCustomNoises ? btnSelectRight.set("enabled", 0) : btnSelectRight.set("enabled", 1);
	
	// Host Sync
	if (pnlCustomSamples.get("visible") == 1)
		return;
	
	if (cmbSettingsHostPlay.getValue() == 1)
	{
		if (isPlaying == 1)
			playNoise(value);
		else
			sntumult.setAttribute(sntumult.switch_noise, 0);
	}
	else
	{
		playNoise(value);
	}
};
Content.getComponent("cmbSelect").setControlCallback(oncmbSelectControl);


inline function oncmbSettingsHostPlayControl(component, value)
{
	cmbSelect.changed();
};
Content.getComponent("cmbSettingsHostPlay").setControlCallback(oncmbSettingsHostPlayControl);





// EQ

// 1 - HP
const var btnEqHpWEnable = Content.getComponent("btnEqHpWEnable");
const var knbEqHpFreq = Content.getComponent("knbEqHpFreq");
const var knbEqHpQ = Content.getComponent("knbEqHpQ");
const var knbEQHp1Gain = Content.getComponent("knbEQHp1Gain");

const var indexFreq1 = 0 * paraEQ1.BandOffset + paraEQ1.Freq;
const var indexQ1 = 0 * paraEQ1.BandOffset + paraEQ1.Q;
const var indexEnable1 = 0 * paraEQ1.BandOffset + paraEQ1.Enabled;

// 2 - Peak 1
const var btnEQPeak1Enable = Content.getComponent("btnEQPeak1Enable");
const var knbEQPeak1Freq = Content.getComponent("knbEQPeak1Freq");
const var knbEQPeak1Gain = Content.getComponent("knbEQPeak1Gain");
const var knbEQPeak1Q = Content.getComponent("knbEQPeak1Q");

const var indexType2 = 1 * paraEQ1.BandOffset + paraEQ1.Type;
const var indexFreq2 = 1 * paraEQ1.BandOffset + paraEQ1.Freq;
const var indexGain2 = 1 * paraEQ1.BandOffset + paraEQ1.Gain;
const var indexQ2 = 1 * paraEQ1.BandOffset + paraEQ1.Q;
const var indexEnable2 = 1 * paraEQ1.BandOffset + paraEQ1.Enabled;

// 3 - Peak 2
const var btnEQPeak2Enable = Content.getComponent("btnEQPeak2Enable");
const var knbEQPeak2Freq = Content.getComponent("knbEQPeak2Freq");
const var knbEQPeak2Gain = Content.getComponent("knbEQPeak2Gain");
const var knbEQPeak2Q = Content.getComponent("knbEQPeak2Q");

const var indexFreq3 = 2 * paraEQ1.BandOffset + paraEQ1.Freq;
const var indexGain3 = 2 * paraEQ1.BandOffset + paraEQ1.Gain;
const var indexQ3 = 2 * paraEQ1.BandOffset + paraEQ1.Q;
const var indexEnable3 = 2 * paraEQ1.BandOffset + paraEQ1.Enabled;

// 4 - Peak 3
const var btnEQPeak3Enable = Content.getComponent("btnEQPeak3Enable");
const var knbEQPeak3req = Content.getComponent("knbEQPeak3req");
const var knbEQPeak3Gain = Content.getComponent("knbEQPeak3Gain");
const var knbEQPeak3Q = Content.getComponent("knbEQPeak3Q");

const var indexType4 = 3 * paraEQ1.BandOffset + paraEQ1.Type;
const var indexFreq4 = 3 * paraEQ1.BandOffset + paraEQ1.Freq;
const var indexGain4 = 3 * paraEQ1.BandOffset + paraEQ1.Gain;
const var indexQ4 = 3 * paraEQ1.BandOffset + paraEQ1.Q;
const var indexEnable4 = 3 * paraEQ1.BandOffset + paraEQ1.Enabled;

// 5 - LP
const var btnEQLPEnable = Content.getComponent("btnEQLPEnable");
const var knbEqLPFreq = Content.getComponent("knbEqLPFreq");
const var knbEqLPQ = Content.getComponent("knbEqLPQ");
const var knbEQLp1Gain = Content.getComponent("knbEQLp1Gain");

const var indexFreq5 = 4 * paraEQ1.BandOffset + paraEQ1.Freq;
const var indexQ5 = 4 * paraEQ1.BandOffset + paraEQ1.Q;
const var indexEnable5 = 4 * paraEQ1.BandOffset + paraEQ1.Enabled;

// Const
const var arrEnable = [btnEqHpWEnable, btnEQPeak1Enable, btnEQPeak2Enable, btnEQPeak3Enable, btnEQLPEnable];
const var arrFreq = [knbEqHpFreq, knbEQPeak1Freq, knbEQPeak2Freq, knbEQPeak3req, knbEqLPFreq];
const var arrGain = [knbEQHp1Gain, knbEQPeak1Gain, knbEQPeak2Gain, knbEQPeak3Gain, knbEQLp1Gain];
const var arrQ = [knbEqHpQ, knbEQPeak1Q, knbEQPeak2Q, knbEQPeak3Q, knbEqLPQ];

reg rangeQDisp = {
	"MinValue": 0.3,
	"MaxValue": 8.0,
	"SkewFactor": 0.3
};

// EQ Filter Select Buttons
inline function oncmbFilter2SwitchControl(component, value)
{
	if (value == 1)
	{
		paraEQ1.setAttribute(indexType2, 4);
		sntumult.setAttribute(sntumult.peak1_switch, 0);
	}
	else
	{
		paraEQ1.setAttribute(indexType2, 2);
		sntumult.setAttribute(sntumult.peak1_switch, 1);
	}
};
Content.getComponent("cmbFilter2Switch").setControlCallback(oncmbFilter2SwitchControl);

inline function oncmbFilter4SwitchControl(component, value)
{
	if (value == 1)
	{
		paraEQ1.setAttribute(indexType4, 4);
		sntumult.setAttribute(sntumult.peak3_switch, 0);
	}
	else
	{
		paraEQ1.setAttribute(indexType4, 3);
		sntumult.setAttribute(sntumult.peak3_switch, 1);
	}
};
Content.getComponent("cmbFilter4Switch").setControlCallback(oncmbFilter4SwitchControl);


// Boradcaster
const BANDS_AMOUNT = 5;
var Broadcast;

// Create a broadcaster. If you intend to attach it to a component, it needs two parameters (conveniently named `component` and `event`)
const var eqWatcher = Engine.createBroadcaster({"component": ParametriqEQ1, "event": undefined});

// The EQ is named `ftEQ` obviously...
eqWatcher.attachToComponentMouseEvents("ftEQ", "All Callbacks", {});

eqWatcher.addListener("RefreshFunction", "watch eq tile",function(component, event)
{
    if(event.drag || event.clicked || event.hover)
    {
		Broadcast = 1;
        for (i = 0; i < BANDS_AMOUNT; i++) 
        {
			arrEnable[i].setValue(paraEQ1.getAttribute(paraEQ1.Enabled + i * paraEQ1.BandOffset));
			arrEnable[i].changed();
			arrFreq[i].setValue(paraEQ1.getAttribute(i * paraEQ1.BandOffset + paraEQ1.Freq));
			arrFreq[i].changed();
			arrGain[i].setValue(paraEQ1.getAttribute(i * paraEQ1.BandOffset + paraEQ1.Gain));
			arrGain[i].changed();			
			arrQ[i].setValue(Math.to0To1(paraEQ1.getAttribute(i * paraEQ1.BandOffset + paraEQ1.Q), rangeQDisp));
			arrQ[i].changed();
		}
		Broadcast = 0;
    }
});

// 1 - HP
inline function onbtnEqHpWEnableControl(component, value)
{
	sntumult.setAttribute(sntumult.hp_enable, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexEnable1, value);
	knbEqHpFreq.set("enabled", value);
	knbEqHpQ.set("enabled", value);
};
Content.getComponent("btnEqHpWEnable").setControlCallback(onbtnEqHpWEnableControl);

inline function onknbEqHpFreqControl(component, value)
{
	sntumult.setAttribute(sntumult.hp_freq, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexFreq1, value);
};
Content.getComponent("knbEqHpFreq").setControlCallback(onknbEqHpFreqControl);

inline function onknbEqHpQControl(component, value)
{
	sntumult.setAttribute(sntumult.hp_q, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexQ1, Math.from0To1(value, rangeQDisp));
};
Content.getComponent("knbEqHpQ").setControlCallback(onknbEqHpQControl);

// 2 - Peak 1
inline function onbtnEQPeak1EnableControl(component, value)
{
	sntumult.setAttribute(sntumult.peak1_enable, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexEnable2, value);
	knbEQPeak1Freq.set("enabled", value);
	knbEQPeak1Gain.set("enabled", value);
	knbEQPeak1Q.set("enabled", value);
	cmbFilter2Switch.set("enabled", value);
};
Content.getComponent("btnEQPeak1Enable").setControlCallback(onbtnEQPeak1EnableControl);

inline function onknbEQPeak1FreqControl(component, value)
{
	sntumult.setAttribute(sntumult.peak1_freq, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexFreq2, value);
};
Content.getComponent("knbEQPeak1Freq").setControlCallback(onknbEQPeak1FreqControl);

inline function onknbEQPeak1GainControl(component, value)
{
	sntumult.setAttribute(sntumult.peak1_gain, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexGain2, value);
};
Content.getComponent("knbEQPeak1Gain").setControlCallback(onknbEQPeak1GainControl);

inline function onknbEQPeak1QControl(component, value)
{
	sntumult.setAttribute(sntumult.peak1_q, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexQ2, Math.from0To1(value, rangeQDisp));
};
Content.getComponent("knbEQPeak1Q").setControlCallback(onknbEQPeak1QControl);

// 3 - Peak 2
inline function onbtnEQPeak2EnableControl(component, value)
{
	sntumult.setAttribute(sntumult.peak2_enable, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexEnable3, value);
	knbEQPeak2Freq.set("enabled", value);
	knbEQPeak2Gain.set("enabled", value);
	knbEQPeak2Q.set("enabled", value);
};
Content.getComponent("btnEQPeak2Enable").setControlCallback(onbtnEQPeak2EnableControl);

inline function onknbEQPeak2FreqControl(component, value)
{
	sntumult.setAttribute(sntumult.peak2_freq, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexFreq3, value);
};
Content.getComponent("knbEQPeak2Freq").setControlCallback(onknbEQPeak2FreqControl);

inline function onknbEQPeak2GainControl(component, value)
{
	sntumult.setAttribute(sntumult.peak2_gain, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexGain3, value);
};
Content.getComponent("knbEQPeak2Gain").setControlCallback(onknbEQPeak2GainControl);

inline function onknbEQPeak2QControl(component, value)
{
	sntumult.setAttribute(sntumult.peak2_q, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexQ3, Math.from0To1(value, rangeQDisp));
};
Content.getComponent("knbEQPeak2Q").setControlCallback(onknbEQPeak2QControl);

// 4 - Peak 3
inline function onbtnEQPeak3EnableControl(component, value)
{
	sntumult.setAttribute(sntumult.peak3_enable, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexEnable4, value);
	knbEQPeak3req.set("enabled", value);
	knbEQPeak3Gain.set("enabled", value);
	knbEQPeak3Q.set("enabled", value);
	cmbFilter4Switch.set("enabled", value);
};
Content.getComponent("btnEQPeak3Enable").setControlCallback(onbtnEQPeak3EnableControl);

inline function onknbEQPeak3reqControl(component, value)
{
	sntumult.setAttribute(sntumult.peak3_freq, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexFreq4, value);
};
Content.getComponent("knbEQPeak3req").setControlCallback(onknbEQPeak3reqControl);

inline function onknbEQPeak3GainControl(component, value)
{
	sntumult.setAttribute(sntumult.peak3_gain, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexGain4, value);
};
Content.getComponent("knbEQPeak3Gain").setControlCallback(onknbEQPeak3GainControl);

inline function onknbEQPeak3QControl(component, value)
{
	sntumult.setAttribute(sntumult.peak3_q, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexQ4, Math.from0To1(value, rangeQDisp));
};
Content.getComponent("knbEQPeak3Q").setControlCallback(onknbEQPeak3QControl);

// 5 - LP
inline function onbtnEQLPEnableControl(component, value)
{
	sntumult.setAttribute(sntumult.lp_enable, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexEnable5, value);
	knbEqLPFreq.set("enabled", value);
	knbEqLPQ.set("enabled", value);
};
Content.getComponent("btnEQLPEnable").setControlCallback(onbtnEQLPEnableControl);

inline function onknbEqLPFreqControl(component, value)
{
	sntumult.setAttribute(sntumult.lp_freq, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexFreq5, value);
};
Content.getComponent("knbEqLPFreq").setControlCallback(onknbEqLPFreqControl);

inline function onknbEqLPQControl(component, value)
{
	sntumult.setAttribute(sntumult.lp_q, value);
	if (Broadcast == 0)
		paraEQ1.setAttribute(indexQ5, Math.from0To1(value, rangeQDisp));
};
Content.getComponent("knbEqLPQ").setControlCallback(onknbEqLPQControl);

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 