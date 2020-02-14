import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { InfinityComponent} from './loading.component';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private overlayRef: OverlayRef = null;

    constructor(private overlay: Overlay) {}

    public showLoading() {

        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create();
        }

        const spinnerOverlayPortal = new ComponentPortal(InfinityComponent);
        const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
    }

    public hideLoading() {
        if (!!this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
        }
    }
    public toggle() {
        if (!!this.overlayRef) {
            this.hideLoading();
        } else {
            this.showLoading();
        }
    }

}
