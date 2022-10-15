package com.chatting.controllers;

import com.chatting.ChattingApplication;
import com.chatting.Message;
import lombok.extern.java.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


// @Controller
public class MessageController {
    private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
//    @MessageMapping("/hello") // 요청
//    @SendTo("/topic/greeting") // 응답
    public Message sendMessage(Message message){

        try {
            Thread.sleep(100); // simulated delay
            log.info("message={0}", message);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new Message("Hello!");
        // Json message key와 Message 객체가 연동
//        System.out.println("connect");
//        System.out.println(message.getMessage());

        //return new Message("Hello, " + HtmlUtils.htmlEscape(message.getMessage()) + "!");
    }
}
