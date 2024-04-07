package com.example.datahub_back.config

import java.security.SecureRandom
import java.util.Base64

object TokenProvider {
    private const val TOKEN_LENGTH = 64

    fun generateToken(): String {
        val random = SecureRandom()
        val bytes = ByteArray(TOKEN_LENGTH)
        random.nextBytes(bytes)
        return Base64.getEncoder().encodeToString(bytes)
    }
    //토큰을 발급해주는 토큰이랑 인증값은 같아야 하기 때문에 싱글톤 패턴을 사용함.

}