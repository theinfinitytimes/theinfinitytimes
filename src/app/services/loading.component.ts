import { Component, OnInit } from '@angular/core';

/**
 *
 * A native spinner component
 */
@Component({
    selector: 'app-loader',
    styles: [`
        body {
            text-align: center
        }

        svg {
            max-width: 25em;
            border-radius: 3px;
            box-shadow: 2px 2px 5px #000;
            background: #111;
            fill: none;
            stroke: #222;
            stroke-linecap: round;
            stroke-width: 3%
        }

        use {
            stroke: #fff;
            animation: a 2s linear infinite
        }

        @keyframes a {
            to {
                stroke-dashoffset: 0px
            }
        }
    `],
    template: `
        <div class="wrapper">
            <div class="overlay">
                <div class="spinner-wrapper">
                    <svg viewBox="-2000 -1000 4000 2000">
                        <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
                        <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use>
                    </svg>
                </div>
            </div>
        </div>
    `
})
export class InfinityComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        //
    }
}
