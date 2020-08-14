import Vue, { DirectiveOptions } from 'vue';
import { DirectiveBinding } from 'vue/types/options';

/**
 * v-img-circle directive
 * adds a circle background behind the v-img
 *
 * @params {string} color the background color to use
 */
const imgCircle: DirectiveOptions = {
    inserted($el: HTMLElement, binding: DirectiveBinding) {
        $el.classList.add('v-image__image-square');
        const $backgroundContainer = document.createElement('div');
        $backgroundContainer.classList.add('v-image__image-background');
        const size: number = $el.offsetWidth > $el.offsetHeight ? $el.offsetWidth : $el.offsetHeight;
        const offset: number = size / 20;
        const newSize: number = size + offset;
        Object.assign($backgroundContainer.style, {
            backgroundColor: binding.value,
            width: newSize + 'px',
            height: newSize + 'px',
            top: '-' + (offset / 2) + 'px',
            left: '-' + (offset / 2) + 'px',
        });
        Object.assign($el.style, {
            minWidth: size + 'px',
            minHeight: size + 'px'
        });
        $el.appendChild($backgroundContainer);
    }
};

Vue.directive('img-circle', imgCircle);
