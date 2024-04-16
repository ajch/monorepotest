package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnotherController {

	@GetMapping("/another")
	public String index() {
		return "Greetings from Spring Boot!";
	}

	@GetMapping("/anotherApi")
	public String anotherApi() {
		return "Greetings from Spring Boot!";
	}

}
