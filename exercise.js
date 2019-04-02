let project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

function getRandomMember(memberArray) {
  return memberArray[Math.floor(Math.random()*members.length)];
}

// get the committee members first
const members = [...project.committee];
const tasks = project.steps;
const numberOfTasks = project.steps.length;
const taskCount = members.reduce((map, member) => {
  map[member] = numberOfTasks/members.length;
  return map;
}, {});

tasks.forEach(task => {
  // check if task count for any members are = 0
  Object.keys(taskCount).forEach(key => {
    if (taskCount[key] === 0 && members.includes(key)) {
      members.splice(members.indexOf(key), 1);
    }
  })
  // once the member array has been updated, select a random member
  let randomMember = getRandomMember(members);
  // assign the task to a randomly selected member
  task.person = randomMember;
  // decrement the number of tasks for the member
  taskCount[randomMember] -= 1;

})

// check if each member was assigned an equal number of tasks
console.log("Task count:\n", taskCount);
console.log("Project:\n", project);
const personToNumAssignedTasks = project.steps.reduce((map, task) => {
  if (map.hasOwnProperty(task.person)) {
    map[task.person] += 1;
  } else {
    map[task.person] = 1;
  }
  return map;
}, {});
console.log("Number of assigned tasks for each member:\n", personToNumAssignedTasks);
