// ##############
// Sample Handling
// ##############
const var pnlLoadSample = Content.getComponent("pnlLoadSample");
const var s = Synth.getAudioSampleProcessor("Script FX1").getAudioFile(0);

const var btnAdd = Content.getComponent("btnAdd");

const var btnSampleNew = Content.getComponent("btnSampleNew");
const var btnSavePreset = Content.getComponent("btnSavePreset");
const var btnPlayerDelete = Content.getComponent("btnPlayerDelete");
const var cmbPresetList = Content.getComponent("cmbPresetList");
const var btnFolderImport = Content.getComponent("btnFolderImport");

const var pnlLoop = Content.getComponent("pnlLoop");
const var pnlLoopStart = Content.getComponent("pnlLoopStart");
const var pnlLoopEnd = Content.getComponent("pnlLoopEnd");
const var knbPlayerFade = Content.getComponent("knbPlayerFade");
const var knbPlayerGain = Content.getComponent("knbPlayerGain");
const var lblSampleName = Content.getComponent("lblSampleName");
const var btnNormalise = Content.getComponent("btnNormalise");
const var pnlFileInfo = Content.getComponent("pnlFileInfo");

const var pnlFolderImport = Content.getComponent("pnlFolderImport");
const var btnFImportYes = Content.getComponent("btnFImportYes");
const var btnFImportCancel = Content.getComponent("btnFImportCancel");
const var btnFImportSelect = Content.getComponent("btnFImportSelect");
const var pnlFImportFolder = Content.getComponent("pnlFImportFolder");
const var knbFolderFade = Content.getComponent("knbFolderFade");
const var knbFolderGain = Content.getComponent("knbFolderGain");
const var btnFolderNormalise = Content.getComponent("btnFolderNormalise");
const var pnlFImportFiles = Content.getComponent("pnlFImportFiles");

const var pnlMsgDelete = Content.getComponent("pnlMsgDelete");
const var pnlMsgExists = Content.getComponent("pnlMsgExists");
const var pnlLoadAnimation = Content.getComponent("pnlLoadAnimation");
const var pnlMsgMissingFile = Content.getComponent("pnlMsgMissingFile");
const var pnlLoadingAnimation = Content.getComponent("pnlLoadingAnimation");

const var btnMissingDelete = Content.getComponent("btnMissingDelete");
const var btnMissingLoad = Content.getComponent("btnMissingLoad");
const var btnMissingCancel = Content.getComponent("btnMissingCancel");

const var AudioWaveform1 = Content.getComponent("AudioWaveform1");
const var wFormW = AudioWaveform1.getWidth();
const var wFormH = AudioWaveform1.getHeight();
const var barW = pnlLoopStart.getWidth();

const var GEN_NOISES =  ["Noise::White", "Noise::Pink", "Noise::Brown", "Noise::Velvet", "Noise::Crushed"]; 
const var CORE_CAT = ["Vinyl::", "Static::", "Machine::", "Hum::", "World::"];
const var VINYL_NOISES = ["Vinyl 1", "Vinyl 2", "Vinyl 3", "Vinyl 4", "Vinyl 5"];
const var STATIC_NOISES = ["Electric 1", "Electric 2", "Film", "Gramophone", "Radio", "TV"];
const var MACHINE_NOISES = ["Computer", "Dough", "Fridge 1", "Fridge 2", "Furnance", "Letters", "Oven", "Air 1", "Air 2", "Vending", "Washing"];
const var HUM_NOISES = ["Alien 1", "Alien 2", "Electric 1", "Electric 2", "VHS"];
const var WORLD_NOISES = ["City 1", "City 2", "City 3", "Crowd", "Fire 1", "Fire 2", "Fire 3", "Fire 4", "Rain 1", "Rain 2", "Rain 3", "Rain 4", "Rain 5", "Underground", "Waterfall 1", "Waterfall 2", "Waterfall 3", "Waterfall 4"];
const var CORE_NOISES = [VINYL_NOISES, STATIC_NOISES, MACHINE_NOISES, HUM_NOISES, WORLD_NOISES];

const var PLETHORA_CAT = ["A::", "B::", "C::"];
const var PLETHORA_A_NOISES = ["RadioOhNo 1", "RadioOhNo 2", "Rwalk_SineFMFlange", "xModRingSqr", "xModRingSine 1", "xModRingSine 2", "CrossModRing 1", "CrossModRing 2", "Resonoise", "GrainGlitch 1", "GrainGlitch 2", "GrainGlitchII 1", "GrainGlitchII 2", "GrainGlitchIII 1", "GrainGlitchIII 2", "Basurilla 1", "Basurilla 2"];
const var PLETHORA_B_NOISES = ["ClusterSaw", "PwCluster", "CrCluster2", "SineFMcluster", "TriFMcluster", "Primecluster", "PrimecCnoise", "FibonacciCluster", "PartialCluster", "PhasingCluster"];
const var PLETHORA_C_NOISES = ["BasuraTotal 1", "BasuraTotal 2", "Atari", "WakingFilomena 1", "WakingFilomena 2", "P_S_H", "ArrayOnTheRocks 1", "ArrayOnTheRocks 2", "ArrayOnTheRocks 3", "ArrayOnTheRocks 4", "ExistencelsPain 1", "ExistencelsPain 2", "WhoKnows 1", "WhoKnows 2", "WhoKnows 3", "SatanWorkout 1", "SatanWorkout 2", "Rwalk_BitCrushPW 1", "Rwalk_BitCrushPW 2", "Rwalk_BitCrushPW 3", "Rwalk_LFree 1", "Rwalk_LFree 2", "Rwalk_LFree 3"];
const var PLETHORA_NOISES = [PLETHORA_A_NOISES, PLETHORA_B_NOISES, PLETHORA_C_NOISES];

reg currentFile;
reg numSamples;
reg currentPreset = "";
reg numberCustomNoises;

// ##############
// Custom loading, saving, ...
// ##############
const var cmbSelect = Content.getComponent("cmbSelect");

reg userPresets = [];
reg allSamples = [];
reg customFolder;
const var appFolder = FileSystem.getFolder(FileSystem.AppData);

inline function getSetPresetList()
{
	userPresets.clear();
	
	customFolder = appFolder.createDirectory("Custom");
	local customFiles = FileSystem.findFiles(customFolder, "*.custom", false);
	
	for (c in customFiles)
		userPresets.push(c.toString(1));
	
	if (userPresets.length > 0)
	{
		userPresets.sortNatural();
		cmbPresetList.set("items", userPresets.join("\n"));
		cmbPresetList.set("enabled", 1);
		numberCustomNoises = userPresets.length;
	}
	else
	{
		cmbPresetList.set("enabled", 0);
		numberCustomNoises = 0;
	}		
}
getSetPresetList();

inline function setNoiseSelectItems()
{
	allSamples.reserve(NUMBER_NOISES + userPresets.length);
	allSamples = GEN_NOISES.clone();
	
	local disCore = "";
	local disPlethora = "";
	
	if (!coreSamplesExists && !plethoraSamplesExists)
	{
		disCore = "~~";
		disPlethora = "~~";
	}
	else if (coreSamplesExists && !plethoraSamplesExists)
	{
		disPlethora = "~~";
	}
	else if (!coreSamplesExists && plethoraSamplesExists)
	{
		disCore = "~~";	
	}
	
	// Add Core Samples
	for (i = 0; i < CORE_CAT.length; i++)
	{
		for (k = 0; k < CORE_NOISES[i].length; k++)
		{
			allSamples.push(CORE_CAT[i] + disCore + CORE_NOISES[i][k] + disCore);
		}
	}
	
	// Add Plethora Samples
	for (i = 0; i < PLETHORA_CAT.length; i++)
	{
		for (k = 0; k < PLETHORA_NOISES[i].length; k++)
		{
			allSamples.push("Noise Plethora::" + PLETHORA_CAT[i] + disPlethora + PLETHORA_NOISES[i][k] + disPlethora);
		}
	}
	
	// Add Custom Semples
	if (userPresets.length > 0)
	{
		for (p in userPresets)
		{
			allSamples.push("Custom::" + p);
		}
	}
	
	cmbSelect.set("items", allSamples.join("\n"));
	cmbSelect.changed();
}
setNoiseSelectItems();

// Animation
reg frame = 0;
reg fake = false;

inline function startAnimation(f)
{
	if (f)
		fake = true;
	else
		fake = false;

	pnlLoadAnimation.set("visible", 1);
	pnlLoadingAnimation.startTimer(10);
}

inline function stopAnimation()
{
	pnlLoadingAnimation.stopTimer();
	pnlLoadAnimation.set("visible", 0);
	frame = 0;
}

pnlLoadingAnimation.setAnimation(lottiLoading);
pnlLoadingAnimation.setTimerCallback(function()
{
	pnlLoadingAnimation.setAnimationFrame(frame);
	
	if (fake)
	{
		if (frame == 20)
			stopAnimation();
	}
			
	if (frame == 90)
		frame = 0;
	
	frame++;
});

// Custom Load, Save and Delete
// Load
inline function customLoad(name)
{
	local customFile = customFolder.getChildFile(name + ".custom");
	
	if (!customFile.isFile())
		return;

	local obj = customFile.loadAsObject();

	local file = FileSystem.fromAbsolutePath(obj.file);
	
	if (!file.isFile())
	{
		s.loadFile("");
		pnlMsgMissingFile.set("text", name);
		pnlMsgMissingFile.data.fileName = file.toString(3);
		pnlMsgMissingFile.set("visible", 1);
		
		lblSampleName.set("text", name);
		knbPlayerFade.setValue(obj.fade);
		knbPlayerGain.setValue(obj.gain);
		knbPlayerFade.changed();
		knbPlayerGain.changed();
	}
	else
	{		
		loadSample(file);
		pnlLoopStart.set("x", obj.startX);
		pnlLoopEnd.set("x", obj.endX);
		knbPlayerFade.setValue(obj.fade);
		knbPlayerGain.setValue(obj.gain);
		
		setKnbStartValue();
		setKnbEndValue();
		knbPlayerFade.changed();
		knbPlayerGain.changed();
	}
	
	if (pnlCustomSamples.get("visible") == 1)
	{
		setRange();
		pnlLoop.repaint();
	}
}
// Cancel
inline function onbtnMissingCancelControl(component, value)
{
	clearSample();
	pnlMsgMissingFile.set("visible", 0);
};
Content.getComponent("btnMissingCancel").setControlCallback(onbtnMissingCancelControl);
// Delete
inline function onbtnMissingDeleteControl(component, value)
{
	customDelete(pnlMsgMissingFile.get("text") , true);
	pnlMsgMissingFile.set("visible", 0);
	getSetPresetList();
	setNoiseSelectItems();
	clearSample();
	cmbSelect.setValue(1);
	cmbSelect.changed();
};
Content.getComponent("btnMissingDelete").setControlCallback(onbtnMissingDeleteControl);
// Import Audio File
inline function onbtnMissingLoadControl(component, value)
{
	FileSystem.browse(FileSystem.Samples, false, "*.wav", function(file)
	{
		if (!file.isFile())
			return;
		
		btnAdd.setValue(1);
		btnAdd.changed();
		currentPreset = pnlMsgMissingFile.get("text");
		btnPlayerDelete.set("enabled", 1);
		loadSample(file);
		pnlMsgMissingFile.set("visible", 0);
	});
};
Content.getComponent("btnMissingLoad").setControlCallback(onbtnMissingLoadControl);

// Save
inline function customSave(name)
{
	local obj = {
		file: currentFile.toString(0),
		fade: knbPlayerFade.getValue(),
		gain: knbPlayerGain.getValue(),
		startX: pnlLoopStart.get("x"),
		endX: pnlLoopEnd.get("x")
	};
	
	startAnimation(true);
	local f = customFolder.getChildFile(name + ".custom");
	f.writeObject(obj);
}

// Delete
inline function customDelete(name, animation)
{
	local f = customFolder.getChildFile(name + ".custom");
	
	if (!f.isFile())
		return;
	
	if (animation)
		startAnimation(true);
	
	f.deleteFileOrDirectory();
}




















// ##############
// User Interaction
// ##############
// btnLoad 
inline function oncmbPresetListControl(component, value)
{
	currentPreset = cmbPresetList.getItemText();
	customLoad(currentPreset);
	pnlLoadSample.set("visible", 0);
	btnPlayerDelete.set("enabled", 1);
};
Content.getComponent("cmbPresetList").setControlCallback(oncmbPresetListControl);



// btnNew 
inline function onbtnSampleNewControl(component, value)
{
	if (!value)
		return;
		
	clearSample();
};
Content.getComponent("btnSampleNew").setControlCallback(onbtnSampleNewControl);



// btnSave
inline function saveHandling()
{
	// Rename Custom
	if (currentPreset != "" && currentPreset != lblSampleName.get("text"))
	{
		local customFile = customFolder.getChildFile(currentPreset + ".custom");
		
		if (customFile.isFile())
		{
			customFile.rename(lblSampleName.get("text") + ".custom");
			getSetPresetList();
		}
	}	
	
	// Save Custom	
	customSave(lblSampleName.get("text"));
	
	getSetPresetList();
	btnPlayerDelete.set("enabled", 1);
	currentPreset = lblSampleName.get("text");
	
	// set cmbPresetList value
	local id = userPresets.findIndex(function(element){ return element == currentPreset;});
	cmbPresetList.setValue(id+1);	
}

inline function onbtnSavePresetControl(component, value)
{
	if (!value)
		return;

	if (userPresets.contains(lblSampleName.get("text")) == true && currentPreset != lblSampleName.get("text"))
	{
		pnlMsgExists.set("text", lblSampleName.get("text"));
		pnlMsgExists.set("visible", 1);
	}
	else
	{
		saveHandling();
	}
};
Content.getComponent("btnSavePreset").setControlCallback(onbtnSavePresetControl);
// Yes
inline function onbtnExistsYesControl(component, value)
{
	customDelete(currentPreset, false);
	pnlMsgExists.set("visible", 0);
	saveHandling();
};
Content.getComponent("btnExistsYes").setControlCallback(onbtnExistsYesControl);
// No
inline function onbtnExistsNoControl(component, value)
{
	pnlMsgExists.set("visible", 0);
};
Content.getComponent("btnExistsNo").setControlCallback(onbtnExistsNoControl);



// btnDelete
inline function onbtnPlayerDeleteControl(component, value)
{
	if (!value)
		return;
	
	pnlMsgDelete.set("text", currentPreset);
	pnlMsgDelete.repaint();
	pnlMsgDelete.set("visible", 1);
};
Content.getComponent("btnPlayerDelete").setControlCallback(onbtnPlayerDeleteControl);
// Yes
inline function onbtnDeleteYesControl(component, value)
{
	customDelete(currentPreset, true);
	pnlMsgDelete.set("visible", 0);
	getSetPresetList();
	clearSample();
};
Content.getComponent("btnDeleteYes").setControlCallback(onbtnDeleteYesControl);
// No
inline function onbtnDeleteNoControl(component, value)
{
	pnlMsgDelete.set("visible", 0);
};
Content.getComponent("btnDeleteNo").setControlCallback(onbtnDeleteNoControl);






// ##############
// Folder Import
// ##############
reg wavFiles = [];

// Show Folder Import
inline function onbtnFolderImportControl(component, value)
{
	if (value)
		pnlFolderImport.set("visible", 1);
};
Content.getComponent("btnFolderImport").setControlCallback(onbtnFolderImportControl);

// Cancel
inline function clearFolderImport()
{
	wavFiles = [];
	btnFImportYes.set("enabled", 0);
	pnlFImportFolder.set("text", "");
	pnlFImportFiles.set("text", "");
	pnlFImportFolder.repaint();
	pnlFImportFiles.repaint();
	
	knbFolderFade.setValue(0.01);
	knbFolderGain.setValue(0);
	btnFolderNormalise.setValue(0);
	
	pnlFolderImport.set("visible", 0);
}

inline function onbtnFImportCancelControl(component, value)
{
	clearFolderImport();
};
Content.getComponent("btnFImportCancel").setControlCallback(onbtnFImportCancelControl);

// Select Folder
inline function onbtnFImportSelectControl(component, value)
{
	FileSystem.browseForDirectory(FileSystem.UserHome, function(result)
	{
		if (!result.isDirectory())
			return;
		
		wavFiles = FileSystem.findFiles(result, "*.wav", false);
		
		if (wavFiles.length > 0)
			btnFImportYes.set("enabled", 1);
		else
			btnFImportYes.set("enabled", 0);
		
		pnlFImportFolder.set("text", result.toString(0));
		pnlFImportFiles.set("text", wavFiles.length);
		pnlFImportFolder.repaint();
		pnlFImportFiles.repaint();
	});
};
Content.getComponent("btnFImportSelect").setControlCallback(onbtnFImportSelectControl);

// Import - Depending on the samples, this can take a while, therefore in a separate thread
const var backTask = Engine.createBackgroundTask("FolderImport");
backTask.setTimeOut(5000);
reg fade;
reg gain;

backTask.setFinishCallback(function(isFinished, wasCancelled)
{
	if (isFinished)
	{
		getSetPresetList();
		stopAnimation();
		clearFolderImport();
		pnlFolderImport.set("visible", 0);
	}
});

inline function onbtnFImportYesControl(component, value)
{
	if (value == 0 || wavFiles == [])
		return;
	
	startAnimation(false);
	fade = knbFolderFade.getValue();
	gain = knbFolderGain.getValue();
	
	backTask.callOnBackgroundThread(function(param)
	{
		for (wav in wavFiles)
		{
			var wavName = wav.toString(1).substring(0, 99);
			
			if (userPresets.contains(wavName))
				continue;
		
			if (btnFolderNormalise.getValue())
				gain = getNormalisedDB(wav);
		
			var obj = {
				file: wav.toString(0),
				fade: fade,
				gain: gain,
				startX: 0,
				endX: wFormW-barW
			};
			
			var f = customFolder.getChildFile(wavName + ".custom");
			f.writeObject(obj);
			backTask.shouldAbort();
		}
	});
};
Content.getComponent("btnFImportYes").setControlCallback(onbtnFImportYesControl);

























// ##############
// Range / Loop / Fade
// ##############
pnlLoopStart.setDraggingBounds([0, 0, wFormW-barW, wFormH]);
pnlLoopStart.setMouseCursor("LeftRightResizeCursor", Colours.white, [0, 0]);
pnlLoopEnd.setDraggingBounds([barW, 0, wFormW-barW, wFormH]);
pnlLoopEnd.setMouseCursor("LeftRightResizeCursor", Colours.white, [0, 0]);

reg range = 0;

// functions
inline function setKnbStartValue()
{
	local value = (pnlLoopStart.get("x")/wFormW)*numSamples;
	sntumult.setAttribute(sntumult.playerStart, (1/numSamples) * value);
}

inline function setKnbEndValue()
{
	local value = ((pnlLoopEnd.get("x")+barW)/wFormW)*numSamples;
	sntumult.setAttribute(sntumult.playerEnd, (1/numSamples) * value);
}

inline function keepPnlStartLeft()
{
	pnlLoopEnd.set("x", pnlLoopStart.get("x")+barW+1);
	setKnbEndValue();
}

inline function keepPnlEndRight()
{
	pnlLoopStart.set("x", pnlLoopEnd.get("x")-barW-1);
	setKnbStartValue();
}

inline function setRange()
{
	range = pnlLoopEnd.get("x") - (pnlLoopStart.get("x") + barW);
}

// pnlLoopStart and pnlLoopEnd
pnlLoopStart.setMouseCallback(function(event)
{
	if (event.drag)
	{
		var x = this.get("x");
	
		// Keep start always left from end
		if (x+barW >= pnlLoopEnd.get("x")+1)
			keepPnlStartLeft();
		
		setRange();
		pnlLoop.repaint();
	}
	
	if (event.mouseUp)
		setKnbStartValue();
});

pnlLoopEnd.setMouseCallback(function(event)
{
	if (event.drag)
	{
		var x = this.get("x");
		
		// Keep end always right from start
		if (x+1 <= pnlLoopStart.get("x")+barW)
			keepPnlEndRight();
			
		setRange();
		pnlLoop.repaint();
	}
	
	if (event.mouseUp)
		setKnbEndValue();
});

// Fade
inline function onknbPlayerFadeControl(component, value)
{
	sntumult.setAttribute(sntumult.playerFade, value);
	pnlLoop.repaint();
};
Content.getComponent("knbPlayerFade").setControlCallback(onknbPlayerFadeControl);

// Normalise
inline function getNormalisedDB(file)
{	
	local channels = file.loadAsAudioFile();
	local peaks = [];
	local max = 0;
	
	if (Array.isArray(channels))
	{
		for (c in channels)
			peaks.push(c.getPeakRange());
	}
	else
	{
		peaks.push(channels.getPeakRange());
	}
	
	for (p in peaks)
		max = Math.max(max, Math.max(Math.abs(p[0]), Math.abs(p[1])));

	return Engine.getDecibelsForGainFactor(0.9999/max);
}

inline function onbtnNormaliseControl(component, value)
{
	if (!value)
		return;

	local aFile = FileSystem.fromAbsolutePath(currentFile.toString(0));

	knbPlayerGain.setValue(getNormalisedDB(aFile));
	knbPlayerGain.changed();
};
Content.getComponent("btnNormalise").setControlCallback(onbtnNormaliseControl);

// Label Sample Name
lblSampleName.setConsumedKeyPresses("all_nonexclusive");

lblSampleName.setKeyPressCallback(function(obj)
{
	if (btnSNameOverlay.get("visible") == 0)
	{
		if (obj.isFocusChange == true && obj.hasFocus == true)
			btnSNameOverlay.set("visible", 1);
	}
});

inline function onlblSampleNameControl(component, value)
{	
	if (lblSampleName.get("text") == "" || lblSampleName.get("text").length > 100)
		btnSavePreset.set("enabled", 0);
	else if (lblSampleName.get("text") != "" && lblSampleName.get("text").length <= 100)
		btnSavePreset.set("enabled", 1);
};
Content.getComponent("lblSampleName").setControlCallback(onlblSampleNameControl);

// Sample Name Overlay
const var btnSNameOverlay = Content.getComponent("btnSNameOverlay");

inline function onbtnSNameOverlayControl(component, value)
{
	if (!value)
		return;
	
	btnSNameOverlay.set("visible", 0);
	lblSampleName.grabFocus();
	lblSampleName.changed();
};
Content.getComponent("btnSNameOverlay").setControlCallback(onbtnSNameOverlayControl);















inline function setFileInfo(path, length, sr, exists)
{
	pnlFileInfo.data.path = path;
	pnlFileInfo.data.length = length;
	pnlFileInfo.data.sr = sr;
	pnlFileInfo.data.exists = exists;
	pnlFileInfo.repaint();
}

inline function loadSample(file)
{
	if (!file.isFile())
		return;

	currentFile = file;
	s.loadFile(file.toString(0));
	numSamples = s.getNumSamples();
	
	if (currentPreset == "")
		lblSampleName.set("text", file.toString(file.NoExtension).substring(0, 99));
	else
		lblSampleName.set("text", currentPreset);
	
	setFileInfo(file.toString(0), s.getNumSamples() / s.getSampleRate(), s.getSampleRate(), true);

	btnNormalise.set("enabled", 1);
	knbPlayerFade.set("enabled", 1);
	knbPlayerGain.set("enabled", 1);
	btnSavePreset.set("enabled", 1);
	
	pnlLoadSample.set("visible", 0);
}

inline function clearSample()
{
	pnlLoadSample.set("visible", 1);
	currentPreset = "";
	numSamples = 0;
	currentFile = "";
	lblSampleName.set("text", "");
	pnlLoopStart.set("x", 0);
	pnlLoopEnd.set("x", wFormW-barW);
	knbPlayerFade.setValue(0);
	knbPlayerGain.setValue(0);
	cmbPresetList.setValue(0);
	
	sntumult.setAttribute(sntumult.playerStart, 0);
	sntumult.setAttribute(sntumult.playerEnd, 1);
	knbPlayerFade.changed();
	knbPlayerGain.changed();
	
	s.loadFile("");
	
	btnPlayerDelete.set("enabled", 0);
	btnSavePreset.set("enabled", 0);
	btnNormalise.set("enabled", 0);
	knbPlayerFade.set("enabled", 0);
	knbPlayerGain.set("enabled", 0);
	pnlFolderImport.set("visible", 0);
	
	pnlFileInfo.data.path = undefined;
	pnlFileInfo.repaint();
	
	setRange();
	pnlLoop.repaint();
	cmbPresetList.setValue(0);
}

// mimic behavior of audio Waveform
pnlLoadSample.setMouseCallback(function(event)
{
	// Show a file browser on right click
	if(event.rightClick && event.clicked)
		FileSystem.browse(FileSystem.Samples, false, "*.wav", loadSample);
});

pnlLoadSample.setFileDropCallback("Drop & Hover", "*.wav", function(obj)
{
	if(obj.drop)
		loadSample(FileSystem.fromAbsolutePath(obj.fileName));
});










































// ##############
// LAF
// ##############
const var lafCustom = Content.createLocalLookAndFeel();

// Custom Samples
const var pnlCustomSamples = Content.getComponent("pnlCustomSamples");

pnlCustomSamples.setPaintRoutine(function(g)
{
	var a = pnlSettings.getLocalBounds(0);
	
	g.setGradientFill([pnlBackground.get("itemColour"), 450, 0, pnlBackground.get("bgColour"), a[2], a[3]]);
	g.fillRoundedRectangle(a, 8);
	
	// Lines
	g.setColour(0xFF1E2222);
	g.drawLine(0, a[2], 55, 55, 1);
	g.setColour(pnlBackground.get("textColour"));
	g.drawLine(0, a[2], 56, 56, 0.6);
	
	// File Info Border
	g.setColour(pnlBackground.get("textColour"));
	g.drawRoundedRectangle([18, 346, 450, 110], 3, 1);
	
	// File Info Header
	g.setColour(this.get("itemColour"));
	g.fillRect([39, 345, 60, 2]);
	
	g.setColour(pnlSettings.get("textColour"));
	g.setFont("Roboto-Medium", 14);
	g.drawText("File Info", [34, 331, 70, 30]);
	
	g.addNoise(graphicNoise);
});

// File Info
pnlFileInfo.setPaintRoutine(function(g)
{
	if (!isDefined(this.data.path))
		return;

	var a = this.getLocalBounds(0);
	
	g.setFont("Roboto-Medium", 13);
	
	// Path
	if (!this.data.exists)
	{
		g.setColour(this.get("itemColour"));
		g.drawMultiLineText(this.data.path, [0, 45], a[2], "left", 1.);
		return;
	}
	else
	{
		g.setColour(this.get("textColour"));
		g.drawMultiLineText(this.data.path, [0, 45], a[2], "left", 1.);
	}
		
	// Length
	var min;
	var sec;
	
	if (this.data.length >= 60)
	{
		min = Math.floor(this.data.length / 60);
		sec = this.data.length % 60;
	}
	else
	{
		min = 0;
		sec = this.data.length;
	}

	var minPrefix = Math.round(min) < 10 ? "0" : "";
	var secPrefix = Math.round(sec) < 10 ? "0" : "";

	// Length
	g.drawAlignedText("Length:", [0, 0, 40, 15], "left");
	g.drawAlignedText(minPrefix + Math.round(min) + ":" + secPrefix + Math.round(sec), [80, 0, 100, 15], "left");
	
	// Sample Rate
	g.drawAlignedText("Sample rate:", [0, 17, 80, 15], "left");
	g.drawAlignedText(Math.round(this.data.sr) + " Hz", [80, 17, 150, 15], "left");
});

// Buttons
btnSampleNew.setLocalLookAndFeel(lafCustom);
btnSavePreset.setLocalLookAndFeel(lafCustom);
btnPlayerDelete.setLocalLookAndFeel(lafCustom);
cmbPresetList.setLocalLookAndFeel(lafCustom);
AudioWaveform1.setLocalLookAndFeel(lafCustom);
btnNormalise.setLocalLookAndFeel(lafCustom);
knbPlayerFade.setLocalLookAndFeel(lafCustom);
knbPlayerGain.setLocalLookAndFeel(lafCustom);
btnFolderImport.setLocalLookAndFeel(lafCustom);
knbFolderFade.setLocalLookAndFeel(lafCustom);
knbFolderGain.setLocalLookAndFeel(lafCustom);

lafCustom.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	var alpha = (obj.enabled == 1) ? 1 : 0.4;
	
	if (obj.over)
		g.setGradientFill([Colours.withAlpha(0xFF3F4545, alpha), 49, 0, Colours.withAlpha(0xFF2C3030, alpha), 51, a[3]]);
	else
		g.setGradientFill([Colours.withAlpha(obj.itemColour2, alpha), 49, 0, Colours.withAlpha(obj.bgColour, alpha), 51, a[3]]);

	g.fillRoundedRectangle(a, 3);
	
	g.setFont("Roboto-Medium", 13);
	g.setColour(Colours.withAlpha(obj.textColour, alpha));
	g.drawAlignedText(obj.text, a, "centred");
});

// Button Sample Name Overlay
const var lafBtnOverly = Content.createLocalLookAndFeel();
btnSNameOverlay.setLocalLookAndFeel(lafBtnOverly);

lafBtnOverly.registerFunction("drawToggleButton", function(g, obj){});

// Button Folder Normalise
const var lafBtnFolderNorm = Content.createLocalLookAndFeel();
btnFolderNormalise.setLocalLookAndFeel(lafBtnFolderNorm);

lafBtnFolderNorm.registerFunction("drawToggleButton", function(g, obj)
{
	var a = obj.area;
	
	// Checkbox
	g.setColour(obj.bgColour);
	g.fillRoundedRectangle([0, 0, 20, 20], 3);
	
	g.setColour(obj.textColour);
	if (obj.value)
		g.fillPath(check, [5, 5, 10, 10]);
	
	// Text
	g.setFont("Roboto-Medium", 13);
	g.drawAlignedText(obj.text, [27, 0, 100, 20], "left");
});

// Knobs
lafCustom.registerFunction("drawRotarySlider", function(g, obj)
{
	var a = obj.area;
	var alpha = obj.enabled ? 1 : 0.4;
	
	// outer ring
	g.setGradientFill([Colours.withAlpha(0xFF414848, alpha), 0, 0, Colours.withAlpha(obj.itemColour1, alpha), 20, a[3]]);
	g.fillEllipse([1, 1, a[3]-2, a[3]-2]);
	
	// Fill
	var ellipseShift = a[3]*0.1;
	
	g.setGradientFill([Colours.withAlpha(obj.itemColour2, alpha), 0, 0, Colours.withAlpha(obj.bgColour, alpha), 0, a[3]]);
	g.fillEllipse([ellipseShift, ellipseShift, a[3] - ellipseShift*2, a[3] - ellipseShift*2]);
	
	var arcThickness = 0.03;
	var arcWidth = 1.0 - 2.0 * arcThickness;
	
	if (obj.text == "Fade")
	{
		var startOffset = 2.5;
		var endOffset = startOffset * 2.0 * obj.valueNormalized - startOffset;
	}
	else
	{
		var startOffset = 0;
		var endOffset = (2.5 * obj.value) / obj.max;
	}
	
	g.setColour(Colours.withAlpha(obj.textColour, alpha));
	
	// Name
	g.setFont("Roboto-Medium", 13);
	g.drawAlignedText(obj.text, [a[3], 8, a[3], 10], "centred");
	
	// Value
	g.setFont("Roboto-Medium", 12);
	g.drawAlignedText(Engine.doubleToString(obj.value, 2), [a[3], 22.5, a[3], 10], "centred");
	
	// Arc
	var K = Content.createPath();
	
	K.addArc([arcThickness * 2, arcThickness * 2, arcWidth - arcThickness * 2, arcWidth - arcThickness * 2], -startOffset, endOffset);
	var pathArea = K.getBounds(a[3]);
	
	var KStyle = {};
	KStyle.EndCapStyle = "rounded";
	KStyle.JointStyle = "curved";
	KStyle.Thickness = a[3] * arcThickness;
	
	g.drawPath(K, pathArea, KStyle);
	
	// Indicator
	var indiDia = a[3]/10;
	g.rotate(endOffset, [a[3]*0.5, a[3]*0.5]);
	g.fillEllipse([a[3]*0.5 - indiDia*0.5, a[3]/6.25, indiDia, indiDia]);
});

// Combobox
lafCustom.registerFunction("drawComboBox", function(g, obj)
{	
	var a = obj.area;
	var alpha = obj.enabled ? 1 : 0.4;
	
   	if (obj.hover)
   		g.setGradientFill([Colours.withAlpha(0xFF3F4545, alpha), 49, 0, Colours.withAlpha(0xFF2C3030, alpha), 51, a[3]]);
   	else
   		g.setGradientFill([Colours.withAlpha(obj.itemColour2, alpha), 49, 0, Colours.withAlpha(obj.bgColour, alpha), 51, a[3]]);
    
    g.fillRoundedRectangle(a, 3);
	
    g.setColour(Colours.withAlpha(obj.textColour, alpha));
    g.setFont("Roboto-Medium", 13);
    g.drawAlignedText("Load", [a[0] + 15, a[1], a[2]-10, a[3]], "left");
    var h = a[3];
    g.fillTriangle([a[0] + a[2] - h/2.75 - 15, a[1] + h/3, h/2.25, h/3.25], Math.PI);
});

// Panel Waveform Background
const var pnlWaveformBack = Content.getComponent("pnlWaveformBack");
pnlWaveformBack.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setColour(pnlWaveformBack.get("bgColour"));
	g.fillRoundedRectangle(a, 3);
});

// Audio Waveform
lafCustom.registerFunction("drawThumbnailPath", function(g, obj)
{	 
	 g.setColour(AudioWaveform1.get("textColour"));
	 g.fillPath(obj.path, obj.area);
});

// CSS
lafCustom.setInlineStyleSheet("
	/** background */
	.scriptaudiowaveform {}

	/** Draw the actual waveform. */
	.scriptaudiowaveform::before {
		content: '';
		background-image: var(--waveformPath);
		background-color: var(--textColour);
	}
	
	/** Draw the playhead pt. 1. */
	.playhead::before
	{
		content: '';	
		background: rgba(230, 227, 219, 0.3);
		width: 8px;
		left: calc(calc(100% * var(--playhead)) - 3px);
		
	}
	
	/** Draw the playhead pt. 2. */
	.playhead::after
	{
		content: '';	
		background: rgba(230, 227, 219, 0.7);
		width: 2px;
		left: calc(100% * var(--playhead));
		border-radius: 1px;
	}
");

// Panel Load Sample
pnlLoadSample.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setColour(pnlLoadSample.get("bgColour"));
	g.fillRoundedRectangle(a, 3);
	
	g.setColour(pnlLoadSample.get("textColour"));
	g.setFont("Roboto-Medium Italic", 14);
	g.drawAlignedText("Drop audio file or Right Click to open Browser", a, "centred");	
});

// Panel Loop
pnlLoop.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	// Range
	g.setColour(this.get("itemColour"));
	g.fillRect([0, 0, pnlLoopStart.get("x"), a[3]]);
	g.fillRect([pnlLoopEnd.get("x"), 0, a[2], a[3]]);
	
	// Fade
	var p1 = Content.createPath();
	var p2 = Content.createPath();
	p1.addTriangle([0, 0], [1, 0], [0, 1]);
	p2.addTriangle([0, 0], [1, 0], [1, 1]);
		
	var fadePx = range * 0.5 * knbPlayerFade.getValue();
	
	g.setColour(Colours.withAlpha(this.get("itemColour2"), 0.3));
	g.fillPath(p1, [pnlLoopStart.get("x") + barW-1, 0, fadePx, a[3]]);
	g.fillPath(p2, [pnlLoopEnd.get("x") - fadePx, 0, fadePx, a[3]]);
});

pnlLoopStart.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setColour(this.get("textColour"));
	g.fillRoundedRectangle([0, 0, 3, a[3]], 1);
});

pnlLoopEnd.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setColour(this.get("textColour"));
	g.fillRoundedRectangle([0, 0, 3, a[3]], 1);
});

// pnlFolderImport
pnlFolderImport.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	// Background
	g.setGradientFill([pnlBackground.get("itemColour"), 450, 0, pnlBackground.get("bgColour"), a[2], a[3]]);
	g.setOpacity(0.90);
	g.fillRect(a);
	
	// background message
	g.setColour(this.get("bgColour"));
	g.fillRoundedRectangle([20, 60, a[2]-40, 300], 3);
	
	g.addNoise(graphicNoise);
});

//pnlFImportFolder
pnlFImportFolder.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setColour(this.get("textColour"));
	
	// Folder
	if (this.get("text") != "")
	{
		g.setFont("Roboto-Medium", 14);
		g.drawAlignedText("Selected Folder:", [0, 0, 100, 15], "left");
		g.setFont("Roboto-Medium", 13);
		g.drawMultiLineText(this.get("text"), [0, 30], a[2], "left", 1.);
	}
});

//pnlFImportFiles
pnlFImportFiles.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
	
	g.setColour(this.get("textColour"));

	// Files
	if (this.get("text") != "")
	{
		g.setFont("Roboto-Medium", 14);
		g.drawAlignedText("Files to import: " + this.get("text"), a, "left");
	}
});


// Message Delete
pnlMsgDelete.setPaintRoutine(function(g)
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
	g.fillPath(question, [60, 190, 55, 55]);
	
	// Text
	g.setFont("Roboto-Medium", 15);
	g.drawMultiLineText("Do you really want to delete the custom noise\n" + this.get("text") + "?", [120, 210], 320, "centred", 5);
});

// Message Exists
pnlMsgExists.setPaintRoutine(function(g)
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
	g.fillPath(question, [60, 190, 55, 55]);
	
	// Text
	g.setFont("Roboto-Medium", 15);
	g.drawMultiLineText("The Noise already exists. Do you want to overwrite\n" + this.get("text") + "?", [120, 210], 320, "centred", 5);
});

pnlMsgMissingFile.setPaintRoutine(function(g)
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
		g.fillPath(question, [60, 190, 55, 55]);
		
		// Text
		g.setFont("Roboto-Medium", 15);
		g.drawMultiLineText("Can't open the audio file\n" + this.data.fileName + "\nWhat do you want to do?", [120, 200], 320, "centred", 5);
});

pnlLoadAnimation.setPaintRoutine(function(g)
{
	var a = this.getLocalBounds(0);
		
	// background 
	g.setGradientFill([pnlBackground.get("itemColour"), 450, 0, pnlBackground.get("bgColour"), a[2], a[3]]);
	g.setOpacity(0.50);
	g.fillRect(a);
});
