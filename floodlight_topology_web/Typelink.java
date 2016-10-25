package net.floodlightcontroller.topology.web;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;



@JsonSerialize(using=Ty.class)
public class Typelink {
	public String src_switch;
    public int src_port;
    public String dst_switch;
    public int dst_port;
    public String type;
    public String direction;
    
    
    
	public String getSrc_switch() {
		return src_switch;
	}
	public void setSrc_switch(String src_switch) {
		this.src_switch = src_switch;
	}
	public int getSrc_port() {
		return src_port;
	}
	public void setSrc_port(int src_port) {
		this.src_port = src_port;
	}
	public String getDst_switch() {
		return dst_switch;
	}
	public void setDst_switch(String dst_switch) {
		this.dst_switch = dst_switch;
	}
	public int getDst_port() {
		return dst_port;
	}
	public void setDst_port(int dst_port) {
		this.dst_port = dst_port;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
    
    
    

}
