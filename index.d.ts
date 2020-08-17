
declare class EmaProxy {
  bind(type:string,fn):void
  unbind(type:string,fn?:Function):void
  clear():void
  fire(type:string,...child):void
  getProxy():DisposeableEventManagerProxy
}

declare class DisposeableEventManagerProxy{
  bind(type:string,fn):void
  unbind(type:string,fn):void
  fire(type:string,...child):void
  dispose():void
}

declare module 'ema-proxy'{
  export = EventManager
}
declare let EventManager:EmaProxy