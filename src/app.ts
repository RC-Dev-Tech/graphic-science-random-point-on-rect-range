import { Config } from "./config"
import { IExample } from "./core/base";
import { Example } from "./examples/example1";

export class App {
    protected getExample(): IExample {
      let mode: number = Config.getInstance().getParam ("exsample_mode")
      switch(mode) {
        case 1: return new Example();
      }
    }

    public runExample(example: IExample ) {
      if(example === null || undefined) {
        console.log(`run example error!`);
        return;
      }

      example.run();
    }

    run () {
      this.runExample(this.getExample());
    }
}