package org.socialapp.Security.ConfFiles;

import org.socialapp.Security.TokenFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConf {

    private final TokenFilter tokenFilter;

    private final CorsConf corsConf = new CorsConf();

    public SecurityConf(TokenFilter tokenFilter) {
        this.tokenFilter = tokenFilter;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConf.corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(
                                "/posts/get-newest", "/posts/stats/*", "/posts/comments/*",
                                "/auth/login", "/auth/signup",
                                "/users/stats/*", "/users/posts/*"
                        ).permitAll()
                        .requestMatchers(
                                "/posts/create", "/posts/comments/create", "/posts/delete-post",
                                "/auth/logout",
                                "/users/follow", "/users/isfollowing", "/users/unfollow"
                        ).hasRole("USER")
                        .anyRequest().authenticated()
                )
                .addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }
}
