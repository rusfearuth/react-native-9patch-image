package su.rusfearuth.reactnative.native9patch;

import android.content.Context;
import android.support.annotation.NonNull;
import android.widget.ImageView;

import su.rusfearuth.reactnative.native9patch.RCTImageCache;


public class RCTImageCapInsetView extends ImageView {
    private String mUri;

    public RCTImageCapInsetView(Context context) {
        super(context);
    }

    public void setSource(String uri) {
        mUri = uri;
        reload();
    }

    public void reload() {
        Integer resId = null;
        if (getImageCache().has(mUri)) {
            resId = getImageCache().get(mUri);
            if (resId == null) {
                getImageCache().remove(mUri);
            }
        }

        if (resId == null) {
            resId = getResourceDrawableId(mUri);
            getImageCache().put(mUri, resId);
        }

        setBackgroundResource(resId);
    }

    private @NonNull Integer getResourceDrawableId(@NonNull final String aName) {
        if (aName == null || aName.isEmpty()) {
                return 0;
        }

        final String name = aName.toLowerCase().replace("-", "_");

        return getResources().getIdentifier(
                name,
                "drawable",
                getContext().getPackageName()
        );
    }

    private RCTImageCache getImageCache()
    {
        return RCTImageCache.getInstance();
    }
}
