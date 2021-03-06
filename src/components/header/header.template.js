import {defaultTitle} from '@/constants';

export function createHeader(state) {
    return `
        <input type="text" class="input" value="${state.title || defaultTitle}" />

        <div>
            <div class="button" data-button="remove">
                <i class="material-icons" data-button="remove">
                    delete
                </i>
            </div>

            <div class="button" data-button="exit">
                <i class="material-icons" data-button="exit">
                    exit_to_app
                </i>
            </div>
        </div>
    `;
}
