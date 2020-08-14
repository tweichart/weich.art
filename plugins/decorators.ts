/**
 * Custom decorators
 */

import { createDecorator } from 'vue-class-component';
import { DirectiveFunction as VueDirectiveFunction, DirectiveOptions as VueDirectiveOptions } from 'vue';

/**
 * @Directive decorator
 */
interface DirectiveSettings {
    bind?: boolean
    inserted?: boolean,
    update?: boolean,
    componentUpdated?: boolean,
    unbind?: boolean,
    [index: string]: boolean | undefined,
}

// extend vue interface for usability with string
// PR: https://github.com/vuejs/vue/pull/11595
interface DirectiveOptions extends VueDirectiveOptions {
    [index: string]: VueDirectiveFunction | undefined,
}

/**
 * @Directive decorator for local directives
 *
 * @param {string} name the directives name
 * @param {DirectiveSettings=} options set directives to be used to true
*                                      (allowed ['bind', 'inserted', 'update', 'componentUpdated', 'unbind'],
 *                                      default ['bind', 'update'] )
 */
export function Directive(name: string, options?: DirectiveSettings) {
    return createDecorator((component, handler) => {
        let handlerMethod: VueDirectiveFunction = () => {
        };
        if (typeof component.methods !== 'undefined' && typeof component.methods[handler] !== 'undefined') {
            handlerMethod = component.methods[handler];
        }
        if (typeof options === 'undefined') {
            options = { bind: true, update: true };
        }
        Object.keys(options).filter((f: string) => {
            if (typeof options === 'undefined' || typeof options[f] === 'undefined') {
                return false;
            }
            // only create methods for options set to true
            return options[f] === true;
        }).forEach((f: string) => {
            if (typeof component.directives === 'undefined') {
                component.directives = {};
            }
            if (typeof component.directives[name] === 'undefined') {
                component.directives[name] = ({} as DirectiveOptions);
            }
            (component.directives[name] as DirectiveOptions)[f] = handlerMethod;
        });
    });
}
