package net.floodlightcontroller.topology.web;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import net.floodlightcontroller.devicemanager.IDevice;
import net.floodlightcontroller.devicemanager.internal.Device;
import net.floodlightcontroller.linkdiscovery.web.LinkWithType;


//@JsonSerialize(using=GJ.class)
public class GetJsonCS {

	public String ControllerIp ;
	public List<String> switchDPID ;
	
	
	
	public String getControllerIp() {
		return ControllerIp;
	}
	public void setControllerIp(String controllerIp) {
		ControllerIp = controllerIp;
	}
	public List<String> getSwitchDPID() {
		return switchDPID;
	}
	public void setSwitchDPID(List<String> switchDPID) {
		this.switchDPID = switchDPID;
	}
	
	
	
	

	
}
