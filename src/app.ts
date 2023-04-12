import { Composable, PageComponent } from './components/page/page.js';
import { Component } from './components/Component.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { NoteComponent } from './components/page/item/note.js';
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(); // dependency injection이 낫기는 하다.
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'http://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const video = new VideoComponent(
      'Video Title',
      'https://youtu.be/XIOoqJyx8E4'
    );
    this.page.addChild(video);
  }
}
new App(document.querySelector('.document')! as HTMLElement);
