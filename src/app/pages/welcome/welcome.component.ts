import {Component, OnInit} from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  defaultCheckedKeys = ['0-0-0'];
  defaultSelectedKeys = ['0-0-0'];
  defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];

  nodes = [
    {
      title: '0-0',
      key: '0-0',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            {title: '0-0-0-0', key: '0-0-0-0', isLeaf: true},
            {title: '0-0-0-1', key: '0-0-0-1', isLeaf: true},
            {title: '0-0-0-2', key: '0-0-0-2', isLeaf: true}
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            {title: '0-0-1-0', key: '0-0-1-0', isLeaf: true},
            {title: '0-0-1-1', key: '0-0-1-1', isLeaf: true},
            {title: '0-0-1-2', key: '0-0-1-2', isLeaf: true}
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        {title: '0-1-0-0', key: '0-1-0-0', isLeaf: true},
        {title: '0-1-0-1', key: '0-1-0-1', isLeaf: true},
        {title: '0-1-0-2', key: '0-1-0-2', isLeaf: true}
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  checkOptionsOne = [
    {label: 'Apple', value: 'Apple', checked: true},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'}
  ];
  checkOptionsTwo = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear', checked: true},
    {label: 'Orange', value: 'Orange'}
  ];
  checkOptionsThree = [
    {label: 'Apple', value: 'Apple', disabled: true, checked: true},
    {label: 'Pear', value: 'Pear', disabled: true},
    {label: 'Orange', value: 'Orange'}
  ];

  log(value: object[]): void {
    console.log(value);
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

}
