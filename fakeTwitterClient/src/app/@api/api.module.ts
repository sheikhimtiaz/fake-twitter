import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Configuration, FakeTwitterApiModule } from "./fakeTwitter";
import { ModuleUrl } from "../core/apim/module-url";
import { baseUrl } from "../core/apim/base-url";
import { environment } from "src/environments/environments";

export function getConfigFactory(servicePath: string): () => Configuration {
    return function factory(): Configuration {
        return new Configuration({
            basePath: new ModuleUrl(baseUrl(environment.apimConfig), servicePath).toUrlWithoutEndSlash()
        });
    }
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FakeTwitterApiModule.forRoot(getConfigFactory('')),
    ]
})
export class ApiModule { }