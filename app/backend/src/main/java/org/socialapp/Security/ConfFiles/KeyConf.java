package org.socialapp.Security.ConfFiles;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.InputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.cert.Certificate;

@Configuration
public class KeyConf {

    @Value("${keystore.path}")
    private String keystorePath;

    @Value("${keystore.password}")
    private String keystorePassword;

    @Value("${key.alias}")
    private String keyAlias;

    @Bean
    public PrivateKey privateKey() throws Exception {
        KeyStore keyStore = KeyStore.getInstance("JKS");
        try (InputStream inputStream = new FileInputStream(keystorePath)) {
            keyStore.load(inputStream, keystorePassword.toCharArray());
        }

        Key key = keyStore.getKey(keyAlias, keystorePassword.toCharArray());
        if (key instanceof PrivateKey) {
            return (PrivateKey) key;
        } else {
            throw new RuntimeException("Key is not a private key");
        }
    }

    @Bean
    public PublicKey publicKey() throws Exception {
        KeyStore keyStore = KeyStore.getInstance("JKS");
        try (InputStream inputStream = new FileInputStream(keystorePath)) {
            keyStore.load(inputStream, keystorePassword.toCharArray());
        }

        Certificate cert = keyStore.getCertificate(keyAlias);
        return cert.getPublicKey();
    }
}
