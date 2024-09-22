// Faust Source File: svf_peak
// Created with HISE on 2024-06-21
import("stdfaust.lib");

Q = hslider("Q",0.7,0.7,10,0.01) : si.smoo;
Freq = hslider("freq",1000,20,20000,0.001) : si.smoo;
Gain = hslider("gain",0,-24,24,0.01) : si.smoo;

process = fi.svf.bell(Freq,Q,Gain) , fi.svf.bell(Freq,Q,Gain);