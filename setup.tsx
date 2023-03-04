// import / define the API of your app shell below

import type { PiletApi } from "../../my-app/dist/emulator/my-app-1.0.0.tgz"

type AddScript = (path: string, attrs?: Record<string, string>) => void;

export default function (app: PiletApi, addScript: AddScript) {
  // wire-up your components here
    piral.registerPage('/todo', piral.fromBlazor('todo'));
    piral.registerTile(() => <div>This is a tile!</div>);
    app.registerMenu(() => <Link to="/todo">ToDo</Link>);

}
