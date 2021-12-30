import express from 'express'
import Home from './home/home.module'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    this.express.use('/', Home.getHome())
  }
}

export default new App().express