import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: ServicesService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => (this.tasks = task));
  }
}
