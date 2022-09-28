package com.wnb;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

//class Steps extends  AppCompatActivity implements SensorEventListener {
//    private SensorManager sensorManger;
//    private Sensor mStepCounter;
//    private boolean isCounterSensorPresent;
//
//
//    @Override
//    protected void onCreate(Bundle savedInstanceState){
//        super.onCreate(savedInstanceState);
//
//
//    }
//
//    @Override
//    public void onSensorChanged(SensorEvent event) {
//
//    }
//
//    @Override
//    public void onAccuracyChanged(Sensor sensor, int accuracy) {
//
//    }
//}







public class StepCounterModule extends ReactContextBaseJavaModule implements SensorEventListener {

    public int stepCount = 1;
    public StepCounterModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "StepCounterModule";
    }

    @ReactMethod
    public void sayHello(String name, Callback callback) {
        try {
             String message = "Hello" + name + (stepCount);
            callback.invoke(null,stepCount+1);
        } catch (Exception e) {
            callback.invoke(e,null);
        }
    }

    @Override
    public void onSensorChanged(SensorEvent event) {
        stepCount = (int) event.values[0];


    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {

    }
}
