package demo.backend.springboot.demobackedn.repository;

import demo.backend.springboot.demobackedn.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {
}
