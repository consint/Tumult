// Faust Source File: svf_hp
// Created with HISE on 2024-06-17
import("stdfaust.lib");

Q = hslider("Q",0.7,0.7,10,0.01) : si.smoo;
Freq = hslider("freq",1000,20,20000,0.001) : si.smoo;

process = fi.svf.hp(Freq,Q) , fi.svf.hp(Freq,Q);