package demo.backend.springboot.demobackedn.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "students")
public class Student {
    @Id
    private String studentId;
    private String studentName;
    private int age;
    private double cgpa;
}
