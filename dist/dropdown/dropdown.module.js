import { MultiselectDropdown } from './dropdown.component';
import { MultiSelectSearchFilter } from './search-filter.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
var MultiselectDropdownModule = /** @class */ (function () {
    function MultiselectDropdownModule() {
    }
    MultiselectDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ReactiveFormsModule],
                    exports: [MultiselectDropdown, MultiSelectSearchFilter],
                    declarations: [MultiselectDropdown, MultiSelectSearchFilter],
                },] },
    ];
    /** @nocollapse */
    MultiselectDropdownModule.ctorParameters = function () { return []; };
    return MultiselectDropdownModule;
}());
export { MultiselectDropdownModule };
//# sourceMappingURL=dropdown.module.js.map