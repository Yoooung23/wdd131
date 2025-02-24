// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.section.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.section[sectionIndex].enrolled++;
          renderSection(this.section);
        }
      }
  };

  console.log(aCourse.section[0].roomNum);

  function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
  }
  
  function renderSection(section) {
    const html = section.map(sectionTemplate);
    document.querySelector("#section").innerHTML = html.join("");
  }
  
  renderSection(aCourse.section);

//   aCourse.showSection(aCourse.section[0]);

document.querySelector("#enrollStudent").addEventListener("click", 
function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });