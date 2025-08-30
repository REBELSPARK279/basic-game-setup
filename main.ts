//FUNCTIONS
function showNum(number: number) {
    if (number == 0) {
        basic.showLeds(`
        .###.
        .#.#.
        .#.#.
        .#.#.
        .###.
        `);
    } else if (number == 1) {
        basic.showLeds(`
        ..#..
        .##..
        ..#..
        ..#..
        .###.
        `);
    } else if (number == 2) {
        basic.showLeds(`
        .###.
        ...#.
        .###.
        .#...
        .###.
        `);
    } else if (number == 3) {
        basic.showLeds(`
        .###.
        ...#.
        .###.
        ...#.
        .###.
        `);
    } else if (number == 4) {
        basic.showLeds(`
        .#.#.
        .#.#.
        .###.
        ...#.
        ...#.
        `);
    } else if (number == 5) {
        basic.showLeds(`
        .###.
        .#...
        .###.
        ...#.
        .###.
        `);
    } else if (number == 6) {
        basic.showLeds(`
        .###.
        .#...
        .###.
        .#.#.
        .###.
        `);
    } else if (number == 7) {
        basic.showLeds(`
        .###.
        .#.#.
        ...#.
        ..#..
        ..#..
        `);
    } else if (number == 8) {
        basic.showLeds(`
        .###.
        .#.#.
        .###.
        .#.#.
        .###.
        `);
    } else if (number == 9) {
        basic.showLeds(`
        .###.
        .#.#.
        .###.
        ...#.
        .###.
        `);
    } else if (number == 10) {
        basic.showLeds(`
        #.###
        #.#.#
        #.#.#
        #.#.#
        #.###
        `);
    } else if (number == 11) {
        basic.showLeds(`
        #..#.
        #..#.
        #..#.
        #..#.
        #..#.
        `);
    } else if (number == 12) {
        basic.showLeds(`
        #.###
        #...#
        #.###
        #.#..
        #.###
        `);
    } else if (number == 13) {
        basic.showLeds(`
        #.###
        #...#
        #.###
        #...#
        #.###
        `);
    } else if (number == 14) {
        basic.showLeds(`
        #.#.#
        #.#.#
        #.###
        #...#
        #...#
        `);
    } else if (number == 15) {
        basic.showLeds(`
        #.###
        #.#..
        #.###
        #...#
        #.###
        `);
    } else if (number == 16) {
        basic.showLeds(`
        #.###
        #.#..
        #.###
        #.#.#
        #.###
        `);
    } else if (number == 17) {
        basic.showLeds(`
        #.###
        #.#.#
        #...#
        #...#
        #...#
        `);
    } else if (number == 18) {
        basic.showLeds(`
        #.###
        #.#.#
        #.###
        #.#.#
        #.###
        `);
    } else if (number == 19) {
        basic.showLeds(`
        #.###
        #.#.#
        #.###
        #...#
        #.###
        `);
    } else {
        basic.showNumber(number);
    }
}
//VARIABLES
let mode = 1;
let page = 2;
let volume = 10;
let record = 0;
let volumeMemory = 10;

//Startup
music.setVolume(250);


//---------------------------------
/*
MODE DIRECTORY
1 main menu
2 volume
3 record
4 
*/
basic.forever(function () {
	if (mode == 1) {
        if (page == 1) {
            basic.showLeds(`
            . # . # .
            # # . . #
            # # . . #
            # # . . #
            . # . # .
            `);
        } else if (page == 2) {
            basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `);
        } else if (page == 3) {
            basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . # . .
            . # # # .
            `);
        }
    } else if (mode == 2) {
        showNum(volume);
    } else if (mode == 3) {
        showNum(record);
    }
});

//INPUTS

input.onPinPressed(TouchPin.P2, function () {
    if (volume == 0) {
        volume = volumeMemory;
    } else {
        volumeMemory = volume;
        volume = 0;
    }
    music.setVolume(25 * volume);
    led.plotAll();
    basic.pause(100);
    basic.clearScreen();
});

input.onButtonPressed(Button.A, function() {
    if (mode == 1) {
        if (page != 1) {
            page--;
        }
    } else if (mode == 2) {
        if (volume != 0) {
            volume--;
            music.setVolume(volume * 25);
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground);
            volumeMemory = volume;
        }
    }
});

input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        if (page != 3) {
            page++;
        }
    } else if (mode == 2) {
        if (volume != 10) {
            volume++;
            music.setVolume(volume * 25);
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground);
            volumeMemory = volume;
        }
    }
});

input.onButtonPressed(Button.AB, function() {
    if (mode == 1) {
        if (page == 1) {
            mode = 2;
        } else if (page == 2) {
            mode = 4;
        } else if (page == 3) {
            mode = 3;
        }
    } else if ((mode == 2) || (mode == 3)) {
        mode = 1;
    }
});
