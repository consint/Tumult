// Faust Source File: noise
// Created with HISE on 2024-06-11
// 1 white, 2 pink, 3 brown, 4 velvet , 5 crushed
import("stdfaust.lib");
mode = hslider("Mode",0,0,4,1);
noise = no.noise , no.pink_noise*10 , no.colored_noise(12,-1.6) , no.colored_noise(12,0.5) , no.lfnoiseN(0,ma.SR/100.0) : ba.selectn(5,mode);
process = noise , noise;

