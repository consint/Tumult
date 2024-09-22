// Faust Source File: svf_hs
// Created with HISE on 2024-07-08
import("stdfaust.lib");

Gain = hslider("Gain",0,-24,24,0.01) : si.smoo;
Q = hslider("Q",0.7,0.7,10,0.01) : si.smoo;
Freq = hslider("freq",1000,20,20000,0.001) : si.smoo;

process = fi.svf.hs(Freq,Q,Gain) , fi.svf.hs(Freq,Q,Gain);