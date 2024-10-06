import { Component, Input } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa; 

  faTimes = faTimes 

  deleta(tarefa: Tarefa) {
    
  }
}
 