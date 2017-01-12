package su.rusfearuth.reactnative.native9patch;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;


public class RCTImageCapInsetManager extends SimpleViewManager<RCTImageCapInsetView> {
    @Override
    public String getName() {
        return "RCTImageCapInset";
    }

    @Override
    protected RCTImageCapInsetView createViewInstance(ThemedReactContext reactContext) {
        return new RCTImageCapInsetView(reactContext);
    }

    @ReactProp(name = "source")
    public void setSource(final RCTImageCapInsetView view, ReadableMap source) {
        String uri = source.getString("uri");
        view.setSource(uri);
    }
}
