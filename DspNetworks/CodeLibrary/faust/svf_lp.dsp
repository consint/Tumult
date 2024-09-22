// Faust Source File: svf_lp
// Created with HISE on 2024-06-21
import("stdfaust.lib");

Q = hslider("Q",0.7,0.7,10,0.01) : si.smoo;
Freq = hslider("freq",1000,20,20000,0.001) : si.smoo;

process = fi.svf.lp(Freq,Q) , fi.svf.lp(Freq,Q);