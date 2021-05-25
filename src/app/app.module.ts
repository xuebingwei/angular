// 这个文件是 angular 根模块，告诉angular如何组装应用
import { NgModule } from '@angular/core';  // Angular的核心模块
import { BrowserModule } from '@angular/platform-browser';  // BrowserModule 浏览器解析的模块

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';  // 根组件

import { TestService } from "./service/test.service"

// @NgModule 装饰器，@NgModule接受一个元数据对象，告诉 Angular 如何编译和启动应用
@NgModule({
  declarations: [   // 配置当前项目运行的组件    (组件) 
    AppComponent, NewsComponent
  ],
  imports: [   // 配置当前模块运行依赖的其他模块    (模块)
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],  // 配置项目所需要的服务   (服务)
  bootstrap: [AppComponent] // 指定应用的主视图(称为根组件) 通过引导跟AppModule来启动应用 ， 这里一般写的是根组件
})

// 根模块不需要导出任何东西  ， 因为其他组件不需要导入根模块
export class AppModule { }
