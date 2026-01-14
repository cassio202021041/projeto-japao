package com.example.hiragana.repository;

import com.example.hiragana.model.Usuario;

public interface UsuarioRepository {

    Usuario findByUsername(String username);
}
