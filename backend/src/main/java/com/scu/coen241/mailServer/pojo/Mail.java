package com.scu.coen241.mailServer.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class Mail {

    private Integer mailId;
    private String senderEmailAddress;
    private String recipientEmailAddress;
    private String mailTitle;
    private String mailContent;
    private Date sendingTime;

    private Date createTime;
    private Date updateTime;
}