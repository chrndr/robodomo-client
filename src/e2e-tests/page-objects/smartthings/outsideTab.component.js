// outsideTab.component.js
import Page from '../page';
import MenuComponent from '../menu.component';

class OutsideTabComponent {
    get porchLightOnButton() {return $('//div[text()="Porch Light"]/parent::*//ion-segment-button[.="On"]')}
    get porchLightOffButton() {return $('//div[text()="Porch Light"]/parent::*//ion-segment-button[.="Off"]')}

    get outsideLightOnButton() {return $('//div[text()="Outside Light"]/parent::*//ion-segment-button[.="On"]')}
    get outsideLightOffButton() {return $('//div[text()="Outside Light"]/parent::*//ion-segment-button[.="Off"]')}

    get outdoorLightsOnButton() {return $('//div[text()="Outdoor Lights"]/parent::*//ion-segment-button[.="On"]')}
    get outdoorLightsOffButton() {return $('//div[text()="Outdoor Lights"]/parent::*//ion-segment-button[.="Off"]')}

    clickOutdoorLightsOnButton() {
        this.outdoorLightsOnButton.click();
    }

    clickOutdoorLightsOffButton() {
        this.outdoorLightsOffButton.click();
    }

    clickOutsideLightOnButton() {
        this.outsideLightOnButton.click();
    }

    clickOutsideLightOffButton() {
        this.outsideLightOffButton.click();
    }

    clickPorchLightOnButton() {
        this.porchLightOnButton.click();
    }

    clickPorchLightOffButton() {
        this.porchLightOffButton.click();
    }
}

module.exports = new OutsideTabComponent('', '/outsideTab');
