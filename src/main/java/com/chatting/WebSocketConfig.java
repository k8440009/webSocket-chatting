package com.chatting;

import com.chatting.configs.WebSocketConst;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


/**
 * Configuration :
 * EnableWebSocketMessageBroker : websocket 서버 사용하는 설정
 *
 * 웹 소켓 연결 속성 설정 파일
 */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    /**
     * 웹 소켓은 통신 프로토콜이지 특정 주제에 가입한 사용자에게 메시지를 전송하는 기능은 없다.
     * 그렇기 때문에 브로커에 데이터를 목적지를 설정
     * @param registry
     */
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint(WebSocketConst.endPointPaths).withSockJS();
    }
    /**
     * 한 클라이언트에서 다른 클라이언트로 메시지를 라우팅 할 때 사용하는 브로커
     * @param registry
     */
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker(WebSocketConst.destinationPrefixes);
        registry.setApplicationDestinationPrefixes(WebSocketConst.prefixes);
    }
}
