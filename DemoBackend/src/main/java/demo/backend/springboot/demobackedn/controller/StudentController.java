package demo.backend.springboot.demobackedn.controller;

import demo.backend.springboot.demobackedn.model.Student;
import demo.backend.springboot.demobackedn.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("student")
public class StudentController {

    private StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("save")
    public Student insertStudent(@RequestBody Student student){
        return studentService.saveStudent(student);
    }

    @GetMapping("all")
    public List<Student> getAllStudent(){
        return studentService.getAll();
    }

    @GetMapping("test")
    public String getStudent(){
        return "Hi there i am working";
    }
}
