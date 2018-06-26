package com.timeablum;

import android.view.LayoutInflater;
import android.widget.LinearLayout;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout() {
        return (LinearLayout) LayoutInflater.from(this).inflate(R.layout.activity_main, null);
    }
}
