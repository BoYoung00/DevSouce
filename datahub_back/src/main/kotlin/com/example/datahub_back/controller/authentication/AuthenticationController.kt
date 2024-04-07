package com.example.datahub_back.controller.authentication

import com.example.datahub_back.config.TokenProvider
import com.example.datahub_back.service.profileService.ProfileService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = ["http://localhost:3000"])
class AuthenticationController(
    @Autowired
    private val passwordEncoder: PasswordEncoder,
    private val profileService: ProfileService
) {
    @PostMapping("/login")
    fun login(@RequestBody loginRequest : LoginRequest) : ResponseEntity<TokenResponse>{
        //로그인 인증 부분 구현 부분 자리
        val username = loginRequest.email
        val token = TokenProvider.generateToken()

        return ResponseEntity(TokenResponse(username, token), HttpStatus.OK)
    }

}