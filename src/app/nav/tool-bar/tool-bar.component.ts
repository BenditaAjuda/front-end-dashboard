import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent{

  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '240px');

}
