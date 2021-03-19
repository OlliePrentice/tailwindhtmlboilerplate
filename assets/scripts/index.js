// Polyfills
import "core-js/stable/promise";
import "core-js/stable/number";
import "core-js/stable/array";
import "regenerator-runtime/runtime";

// Load App
import General from './app/General';


(() => {

    General();

})();

window.onload = () => {

};
