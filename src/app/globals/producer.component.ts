import { strictEqual } from 'assert';
import _ from 'lodash';

const isWin: boolean = process.platform === "win32";

function Producer() {
    return { message: "Hello world" };
}

export default Producer();
